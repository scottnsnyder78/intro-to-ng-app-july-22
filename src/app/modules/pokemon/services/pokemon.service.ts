import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonList } from '../models';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private httpClient: HttpClient) { }

  getPokemonList(): Observable<PokemonList> {
    return this.httpClient.get<PokemonList>(`https://pokeapi.co/api/v2/pokemon/?limit=251`);
  }
}
