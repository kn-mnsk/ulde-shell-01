import { UldePlugin } from '../../plugin-registry/plugin.types';
import { Overlay } from './overlay';

export const ObservePlugin: UldePlugin & { overlay?: Overlay } = {
  id: 'ulde.observe',
  namespace: 'observe',
  version: '0.1.0',

  onRegister(ctx) {
    ctx.logger.info('[observe] registered');
  },

  onActivate(ctx) {
    this.overlay = new Overlay(ctx.mountPoint);
  },

  onFrame(ctx) {
    this.overlay?.update({
      frame: ctx.frame,
      timestamp: ctx.timestamp,
      events: ctx.events,
    });
  },

  onDispose() {
    this.overlay?.destroy();
  }
};
