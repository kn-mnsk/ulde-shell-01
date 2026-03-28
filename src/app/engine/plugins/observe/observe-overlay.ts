import { Component, input, computed, } from '@angular/core';

import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'ulde-observe-overlay',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: `./observe-overlay.html`,
  styleUrls: ['./observe-overlay.scss']
})
export class ObserveOverlay {
  frame = input<number>(0);
  timestamp = input<number>(0);
  events = input<string[] | null>([]);
  phases = input<{
    start: number;
    plugins: number;
    dom: number;
    idle: number;
  } | null>(null);
  pluginTimings = input<Record<string, number> | null>(null);

  // // Reset every 120 frames (2 seconds at 60fps)
  // private cycle = 120;

  // progress = computed(() => {
  //   const f = this.frame();
  //   return (f % this.cycle) / this.cycle;
  // });

  // Fake phase ratios for now — later these will come from ULDE
  pluginSegments = computed(() => {
    const timings = this.pluginTimings();
    if (!timings) return [];

    const entries = Object.entries(timings);
    const total = entries.reduce((sum, [, v]) => sum + v, 0) || 1;

    const colors = [
      '#4caf50', // green
      '#2196f3', // blue
      '#ff9800', // orange
      '#e91e63', // pink
      '#9c27b0', // purple
      '#009688', // teal
    ];

    return entries.map(([id, ms], i) => ({
      name: id,
      ratio: ms / total,
      color: colors[i % colors.length],
      ms
    }));
  });





}
