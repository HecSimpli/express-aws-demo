import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TurfSample } from '../turf-sample';

@Component({
  selector: 'app-turfing-sample',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="listing">
      <img class="listing-photo" [src]="turfingSample.
      photo" alt="photo of {{turfingSample.name}}">
      <h2 class="listing-heading">{{turfingSample.name}}</h2>
      <p class="listing-sample">{{turfingSample.oz}}, {{turfingSample.pileHeight}}</p>
    </section>
  `,
  styleUrl: './turfing-sample.component.css'
})
export class TurfingSampleComponent {
  @Input() turfingSample!:TurfSample;
}