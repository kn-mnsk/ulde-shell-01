import { Injectable } from '@angular/core';
import { UldePlugin } from './plugin.types';

@Injectable({ providedIn: 'root' })
export class PluginRegistry {
  private plugins = new Map<string, UldePlugin>();

  register(plugin: UldePlugin) {
    this.plugins.set(plugin.namespace, plugin);
    plugin.register();
  }

  list() {
    return Array.from(this.plugins.values());
  }
}
