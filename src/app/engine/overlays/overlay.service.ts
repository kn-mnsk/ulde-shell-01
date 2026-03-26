import { Injectable } from '@angular/core';
import { OverlayConfig } from './overlay.types';

@Injectable({ providedIn: 'root' })
export class OverlayService {
  show(config: OverlayConfig = {}) {
    console.log('Showing overlay with config:', config);
  }
}
