import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../interfaces/character';

@Injectable({
  providedIn: 'root',
})
export class RickMortyApiService {
  private url: string = 'https://rickandmortyapi.com/api/character/';

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<Character[]> {
    return this.http.get<Array<Character>>(this.url);
  }

  searchCharacter(name: string): Observable<Character[]> {
    return this.http.get<Character[]>(`${this.url}?name=${name}`);
  }
}
