import { AfterViewInit, Component, ElementRef, ViewChild, signal,  } from '@angular/core';
import { Router } from 'express';
import { PluginRegistryService } from './engine/plugin-registry/plugin-registry.service';
import { BUILTIN_PLUGINS } from './engine/plugins';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements AfterViewInit {
  protected readonly title = signal('ulde-shell');


  @ViewChild('overlayHost', { static: true }) overlayHost!: ElementRef;

  constructor(private registry: PluginRegistryService) { }

  ngAfterViewInit() {
    this.registry.init(this.overlayHost.nativeElement);

    for (const plugin of BUILTIN_PLUGINS) {
      this.registry.register(plugin);
    }

    this.registry.activateAll();
  }
}

