import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TurfingSampleComponent } from '../turfing-sample/turfing-sample.component';
import { TurfSample } from '../turf-sample';
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
      <app-turfing-sample *ngFor="let turfSample of turfSampleList" [turfingSample]="turfSample"></app-turfing-sample>

    </section>
    <hr>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  turfSampleList: TurfSample[] = [
    {
      "id": 0,
      "name": "Summer-55",
      "oz": "55 Oz",
      "pileHeight":"pile height 1.25\"",
      "photo": "/assets/bernard.jpg",
      "availableRolls": 4,
      "rollSize13": true,
      "rollSize15": true
      },
      {
        "id": 1,
        "name": "Ventura-75",
        "oz": "75 Oz",
        "pileHeight": "pile height 1.57\"",
        "photo": "/assets/brandon-griggs-wR11KBaB86U-unsplash.jpg",
        "availableRolls": 0,
        "rollSize13": false,
        "rollSize15": true
      },
      {
        "id": 2,
        "name": "Malibu-85",
        "oz": "85 Oz",
        "pileHeight": "pile height 1.57\"",
        "photo": "/assets/i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg",
        "availableRolls": 1,
        "rollSize13": false,
        "rollSize15": false
      },
      {
        "id": 3,
        "name": "Sunrise-85",
        "oz": "85 Oz",
        "pileHeight": "pile height 1.77\"",
        "photo": "/assets/ian-macdonald-W8z6aiwfi1E-unsplash.jpg",
        "availableRolls": 1,
        "rollSize13": true,
        "rollSize15": false
      },
      {
        "id": 4,
        "name": "Oasis-92",
        "oz": "92 Oz",
        "pileHeight": "pile height 1.97",
        "photo": "/assets/krzysztof-hepner-978RAXoXnH4-unsplash.jpg",
        "availableRolls": 1,
        "rollSize13": true,
        "rollSize15": false
      },
      {
        "id": 5,
        "name": "PalmSpring-102",
        "oz": "102 Oz",
        "pileHeight": "pile height 2",
        "photo": "/assets/r-architecture-JvQ0Q5IkeMM-unsplash.jpg",
        "availableRolls": 2,
        "rollSize13": true,
        "rollSize15": true
      },
      {
        "id": 6,
        "name": "California-120",
        "oz": "120 Oz",
        "pileHeight": "pile height 2",
        "photo": "/assets/phil-hearing-IYfp2Ixe9nM-unsplash.jpg",
        "availableRolls": 5,
        "rollSize13": true,
        "rollSize15": true
      },
      {
        "id": 7,
        "name": "PuttingGreen-73",
        "oz": "73 Oz",
        "pileHeight": "height .5",
        "photo": "/assets/r-architecture-GGupkreKwxA-unsplash.jpg",
        "availableRolls": 2,
        "rollSize13": true,
        "rollSize15": true
      },
      {
        "id": 8,
        "name": "Seriously Safe Towns",
        "oz": "Oakland",
        "pileHeight": "CA",
        "photo": "/assets/saru-robert-9rP3mxf8qWI-unsplash.jpg",
        "availableRolls": 10,
        "rollSize13": false,
        "rollSize15": false
      },
      {
        "id": 9,
        "name": "Capital Safe Towns",
        "oz": "Portland",
        "pileHeight": "OR",
        "photo": "/assets/webaliser-_TPTXZd9mOo-unsplash.jpg",
        "availableRolls": 6,
        "rollSize13": true,
        "rollSize15": true
      }
  ];
}
