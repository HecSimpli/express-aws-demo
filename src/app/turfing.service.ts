import { Injectable } from '@angular/core';
import { TurfSample } from './turf-sample';

@Injectable({
  providedIn: 'root'
})
export class TurfingService {
  url = 'http://localhost:3000/samples';

  constructor() { }

  async getAllTurfingSamples() : Promise<TurfSample[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getTurfingSampleById(id: Number): Promise<TurfSample | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }
  submitApplication(firstName: string, lastName: string, email: string){
    console.log(firstName, lastName, email);
  }
}

