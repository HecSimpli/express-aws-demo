import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by kind">
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">

    </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
