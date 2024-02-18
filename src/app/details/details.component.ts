import { Component,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { TurfingService } from '../turfing.service';
import { TurfSample } from '../turf-sample';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
   <article>
   <img class="lisiting-photo" [src]="turfSample?.photo">
    <section class="listing-description">
      <h2 class="listing-heading">{{turfSample?.name}}</h2>
      <p class="listing-location">{{turfSample?.oz}}, {{turfSample?.pileHeight}}</p>
    </section>
    <section class="listing-features">
      <h2 class="section-heading">About this kind of turf</h2>
      <ul>
        <li>Rolls available: {{turfSample?.availableRolls}}</li>
        <li>Size is 13 wide: {{turfSample?.rollSize13}}</li>
        <li>Size is 15 wide:{{turfSample?.rollSize15}}</li>
      </ul>
    </section>
    <section class="listing-apply">
      <h2 class="section-heading">Make your order</h2>
      <button class="primary">click here</button>
    </section>
   </article>
  `,
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  turfingService = inject(TurfingService);
  turfSample: TurfSample | undefined;
  //  turfingSampleId = 0;

  constructor() {
    const turfingSampleId = Number(this.route.snapshot.params["id"]);
    this.turfSample = this.turfingService.
    getHousingLocationById(turfingSampleId);
  }
}
