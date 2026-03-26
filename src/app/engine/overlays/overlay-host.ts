import { Component } from '@angular/core';

@Component({
  selector: 'ulde-overlay-host',
  standalone: true,
  template: `<ng-content></ng-content>`,
})
export class OverlayHost {}
