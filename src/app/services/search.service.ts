import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private apiUrl = 'https://api.example.com/search'; // Replace with your API

  constructor(private http: HttpClient) {}

  getTravelOptions(destination: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?destination=${destination}`);
  }


}
