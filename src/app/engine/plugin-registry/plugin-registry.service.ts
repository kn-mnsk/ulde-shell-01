import { Injectable, inject } from '@angular/core';
import { UldePlugin } from './plugin.types';
import { LifecycleService } from '../lifecycle/lifecycle.service';

@Injectable({ providedIn: 'root' })
export class PluginRegistryService {
  private plugins: UldePlugin[] = [];
  private mountPoint!: HTMLElement;

  private lifecycle = inject(LifecycleService);

  init(mountPoint: HTMLElement) {
    this.mountPoint = mountPoint;

    // Connect lifecycle → plugins
    this.lifecycle.frame$.subscribe((ctx) => {
      for (const plugin of this.plugins) {
        plugin.onFrame?.(ctx);
      }
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
        mountPoint: this.mountPoint
      });
    }
  }

  disposeAll() {
    for (const plugin of this.plugins) {
      plugin.onDispose?.();
    }
  }
}
