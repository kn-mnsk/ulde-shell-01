import { Injectable } from '@angular/core';
import { animationFrameScheduler, interval, map, shareReplay } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LifecycleService {
  frame$ = interval(0, animationFrameScheduler).pipe(
    map((frame) => ({
      frame,
      timestamp: performance.now(),
      events: ['onFrame']
    })),
    shareReplay(1)
  );
}
