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



  phaseSegments = computed(() => {
    const p = this.phases();
    console.log(`Log: phaseSegments`, p);
    if (!p) return [];

    const total = p.start + p.plugins + p.dom + p.idle || 1;

    return [
      { name: 'start', ratio: p.start / total, color: '#4caf50' },
      { name: 'plugins', ratio: p.plugins / total, color: '#2196f3' },
      { name: 'dom', ratio: p.dom / total, color: '#ff9800' },
      { name: 'idle', ratio: p.idle / total, color: '#9e9e9e' }
    ];
  });

  // Fake phase ratios for now — later these will come from ULDE
  pluginSegments = computed(() => {

    const timings = this.pluginTimings();
    console.log(`Log: pluginSegments`, timings);
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

  pluginList = computed(() => {
    const timings = this.pluginTimings();
    console.log(`Log: pluginList`, timings);
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
      id,
      ms,
      pct: (ms / total) * 100,
      color: colors[i % colors.length]
    }));
  });

  heatColor = computed(() => {
    const ms = this.timestamp(); // assuming timestamp is delta for now
    console.log(`Log: heatColor`, ms);

    let color = '#4caf50';
    if (ms >= 8 && ms < 14) color = '#ffeb3b';
    else if (ms >= 14 && ms < 16.6) color = '#ff9800';
    else if (ms >= 16.6) color = '#f44336';

    // Update history
    this.updateHistory(ms, color);

    return color;
  });

  private historySize = 120;
  private frameHistory: { ms: number; color: string }[] = [];

  updateHistory(ms: number, color: string) {
    this.frameHistory.push({ ms, color });
    if (this.frameHistory.length > this.historySize) {
      this.frameHistory.shift();
    }
  }

  history = computed(() => this.frameHistory);

  maxHistoryMs = computed(() => {
    const hist = this.history();
    console.log(`Log: maxHistoryMs`, hist);

    if (!hist.length) return 1;
    return Math.max(...hist.map(h => h.ms), 1);
  });

  scaledHistory = computed(() => {
    const max = this.maxHistoryMs();
    return this.history().map(h => ({
      ...h,
      height: Math.min(1, h.ms / max) // 0–1
    }));
  });


}
