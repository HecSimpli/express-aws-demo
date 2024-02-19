import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TurfingSampleComponent } from '../turfing-sample/turfing-sample.component';
import { TurfSample } from '../turf-sample';
import { TurfingService } from '../turfing.service';

@Component({
  selector: 'app-home',
  standalone: true, 
  imports: [CommonModule, TurfingSampleComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by kind" #filter>
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
    </section>
    <hr>
    <section class="results">
      <app-turfing-sample *ngFor="let turfSample of filteredSampleList" [turfingSample]="turfSample"></app-turfing-sample>

    </section>
   
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  turfSampleList: TurfSample[] = [];
  turfingService: TurfingService = inject (TurfingService);
  filteredSampleList:TurfSample[] = [];
  constructor() {
    this.turfingService.getAllTurfingSamples().then((turfSampleList: TurfSample[]) => {
      this.turfSampleList = turfSampleList;
      this.filteredSampleList = turfSampleList;
    }); 
  }

  filterResults(text: string){
    if (!text) this.filteredSampleList = this.turfSampleList;

    this.filteredSampleList = this.turfSampleList.filter(
      turfSample => turfSample?.name.toLowerCase().includes(text.toLowerCase())
    );
  }
}
