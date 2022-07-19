import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Breed } from '../modules/breed';

@Injectable({
  providedIn: 'root'
})
export class BreedService {
  constructor(private http: HttpClient){
      this.getBreedList();
  }

  getBreedList(): Observable<Breed[]> {
    const headers = new HttpHeaders()
      headers.append('x-api-key', '45fd61d6-d878-4f93-a3e5-a3fd62b99955');
    return this.http.get<Breed[]>(`https://api.thedogapi.com/v1/breeds`, {
      headers,
      params: new HttpParams().set('limit', '')
    })
  }
}
