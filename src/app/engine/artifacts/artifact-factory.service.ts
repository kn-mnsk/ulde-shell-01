import { Injectable } from '@angular/core';
import { ArtifactType } from './artifact.types';

@Injectable({ providedIn: 'root' })
export class ArtifactFactory {
  create(type: ArtifactType) {
    console.log('Creating artifact:', type);
  }
}
