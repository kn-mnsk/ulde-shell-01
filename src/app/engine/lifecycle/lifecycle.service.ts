import { Injectable } from '@angular/core';
import { animationFrameScheduler, interval, map, shareReplay } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LifecycleService {
  frame$ = interval(0, animationFrameScheduler).pipe(
    map((frame) => {
      const t0 = performance.now();

      // Phase 1: frame start
      const tStart = performance.now();

      // Phase 2: plugin execution (ULDE will fill this later)
      const tPlugins = performance.now();

      // Phase 3: DOM update (Angular zone-less render)
      const tDom = performance.now();

      const tEnd = performance.now();

      return {
        frame,
        timestamp: tEnd,
        events: ['onFrame'],
        phases: {
          start: tStart - t0,
          plugins: tPlugins - tStart,
          dom: tDom - tPlugins,
          idle: Math.max(0, 16.6 - (tEnd - t0)) // 60fps budget
        },
        // Added here — registry will fill this in
        pluginTimings: {}
      };
    }),
    shareReplay(1)
  );
}
