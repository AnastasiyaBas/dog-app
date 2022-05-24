import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Breed } from '../modules/interface';

@Injectable({
  providedIn: 'root'
})
export class BreedsService {
  dogList: BehaviorSubject<Breed[]> = new BehaviorSubject<Breed[]>([]);
  
  constructor(private http: HttpClient){
      this.getBreedList();
  }

  getBreedList(): void {
    const headers = new HttpHeaders()
    headers.append('x-api-key', '45fd61d6-d878-4f93-a3e5-a3fd62b99955');
    this.http.get<Breed[]>(`https://api.thedogapi.com/v1/breeds`, {
      headers,
    params: new HttpParams().set('limit', '')
    })
    .subscribe(resolve => {
      this.dogList.next(resolve)
    console.log(resolve)});
  }
  
}
