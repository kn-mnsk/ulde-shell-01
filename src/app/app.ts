import { AfterViewInit, Component, ElementRef, ViewChild, signal, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { EnvironmentInjector } from '@angular/core';
import { PluginRegistryService } from './engine/plugin-registry/plugin-registry.service';
import { BUILTIN_PLUGINS } from './engine/plugins';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements AfterViewInit {
  protected readonly title = signal('ulde-shell');


  private $isBrowser = signal<boolean>(false);

  @ViewChild('overlayHost', { static: true }) overlayHost!: ElementRef;

  constructor(
    private registry: PluginRegistryService,
    private injector: EnvironmentInjector,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {
    const isBrowser = isPlatformBrowser(this.platformId);
    this.$isBrowser.set(isBrowser);
  }


  ngAfterViewInit() {
    if (!this.$isBrowser()) return;
    
    this.registry.init(this.overlayHost.nativeElement, this.injector);

    for (const plugin of BUILTIN_PLUGINS) {
      this.registry.register(plugin);
    }

    this.registry.activateAll();
  }
}

