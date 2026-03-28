import { Injectable, inject } from '@angular/core';
import { EnvironmentInjector } from '@angular/core';
import { UldePlugin } from './plugin.types';
import { LifecycleService } from '../lifecycle/lifecycle.service';

@Injectable({ providedIn: 'root' })
export class PluginRegistryService {
  private plugins: UldePlugin[] = [];
  private mountPoint!: HTMLElement;
  private injector!: EnvironmentInjector;

  private lifecycle = inject(LifecycleService);

  init(mountPoint: HTMLElement, injector: EnvironmentInjector) {
    this.mountPoint = mountPoint;
    this.injector = injector;

    // Connect lifecycle → plugins
    // this.lifecycle.frame$.subscribe((ctx) => {
    //   for (const plugin of this.plugins) {
    //     plugin.onFrame?.(ctx);
    //   }
    // });

    this.lifecycle.frame$.subscribe((ctx) => {
      const pluginTimings: Record<string, number> = {};

      for (const plugin of this.plugins) {
        const t0 = performance.now();
        plugin.onFrame?.(ctx);
        const t1 = performance.now();

        pluginTimings[plugin.id] = t1 - t0;
      }

      // Attach timings to the frame context
      ctx.pluginTimings = pluginTimings;
    });


  }

  register(plugin: UldePlugin) {
    this.plugins.push(plugin);

    plugin.onRegister?.({
      logger: { info: (msg) => console.log(`[ULDE] ${msg}`) }
    });
  }

  activateAll() {
    for (const plugin of this.plugins) {
      plugin.onActivate?.({
        mountPoint: this.mountPoint,
        injector: this.injector
      });
    }
  }

  disposeAll() {
    for (const plugin of this.plugins) {
      plugin.onDispose?.();
    }
  }
}
