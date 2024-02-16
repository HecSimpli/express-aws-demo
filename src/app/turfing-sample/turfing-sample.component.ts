import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-turfing-sample',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="listing">
      <img class="listing-photo">
      <h2 class="listing-heading"></h2>
      <p class="listing-sample"></p>
    </section>
  `,
  styleUrl: './turfing-sample.component.css'
})
export class TurfingSampleComponent {

}
