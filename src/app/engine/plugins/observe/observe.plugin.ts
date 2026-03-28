import { UldePlugin } from '../../plugin-registry/plugin.types';
import { createComponent, EnvironmentInjector } from '@angular/core';
import { ObserveOverlay } from './observe-overlay';

export const ObservePlugin: UldePlugin & { cmpRef?: any } = {
  id: 'ulde.observe',
  namespace: 'observe',
  version: '0.1.0',

  onRegister(ctx) {
    ctx.logger.info('[observe] registered');
  },

  onActivate(ctx) {
    // Create Angular component dynamically
    const injector = (ctx as any).injector as EnvironmentInjector;

    this.cmpRef = createComponent(ObserveOverlay, {
      environmentInjector: injector,
      hostElement: document.createElement('div')
    });

    // ctx.mountPoint.append(this.cmpRef.location.nativeElement);
    ctx.mountPoint.appendChild(this.cmpRef.location.nativeElement);
  },

  onFrame(ctx) {
    if (!this.cmpRef) return;

    this.cmpRef.setInput('frame', ctx.frame);
    this.cmpRef.setInput('timestamp', ctx.timestamp);
    this.cmpRef.setInput('events', ctx.events);
    this.cmpRef.setInput('phases', ctx.phases);
    this.cmpRef.setInput('pluginTimings', ctx.pluginTimings);
  },

  onDispose() {
    this.cmpRef?.destroy();
  }
};
