import './observe.style.scss';

export interface OverlayUpdate {
  frame: number;
  timestamp: number;
  events: string[];
}

export class Overlay {
  private el: HTMLDivElement;

  constructor(root: HTMLElement) {
    this.el = document.createElement('div');
    this.el.className = 'ulde-observe-overlay';
    root.appendChild(this.el);
  }

  update({ frame, timestamp, events }: OverlayUpdate) {
    this.el.innerHTML = `
      <div class="ulde-observe-row">
        <span class="label">Frame</span>
        <span class="value">${frame}</span>
      </div>
      <div class="ulde-observe-row">
        <span class="label">Time</span>
        <span class="value">${timestamp.toFixed(1)} ms</span>
      </div>
      <div class="ulde-observe-row">
        <span class="label">Events</span>
        <span class="value">${events.join(', ')}</span>
      </div>
    `;
  }

  destroy() {
    this.el.remove();
  }
}
