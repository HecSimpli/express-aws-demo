import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <main>
      <header class="brand-name">
        <img class="brand-logo" src="/assets/logo-t.svg" alt="logo" aria-hidden="true">
      </header>
      <section class="content">
        <!-- <app-home></app-home> -->
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
  imports: [RouterOutlet, HomeComponent],
})
export class AppComponent {
  title = 'turf-app01';
}
