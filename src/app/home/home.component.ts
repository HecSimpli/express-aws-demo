import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TurfingSampleComponent } from '../turfing-sample/turfing-sample.component';

@Component({
  selector: 'app-home',
  standalone: true, 
  imports: [CommonModule, TurfingSampleComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by kind">
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-turfing-sample></app-turfing-sample>

    </section>
    <hr>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
