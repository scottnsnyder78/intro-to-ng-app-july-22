import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonDetail, PokemonList } from '../models';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {


  // app-pokemon-detail
  // fake data that returns fromt he call to pokemon
  selectedPokemon: PokemonDetail | undefined =
    {
      id: '1',
      name: 'bulbasaur',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
      type: 'grass/poison',
      height: 0,
      weight: 0
    }

  pokemonList$!: Observable<PokemonList>

  pokemonTeamMember: PokemonDetail | null = {
    id: '1',
    name: 'bulbasaur',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    type: 'grass/poison',
    height: 0,
    weight: 0
  }

  // inject our services
  constructor(private pokemonService: PokemonService) { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method, no-empty-function
  ngOnInit(): void {
    this.pokemonList$ = this.pokemonService.getPokemonList();
  }

}


