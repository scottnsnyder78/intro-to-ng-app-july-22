import { Component, OnInit } from '@angular/core';
import { PokemonDetail, PokemonList } from '../models';

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

  // fake data from the initial call
  pokemonList: PokemonList | null = {
    count: 10,
    next: 'string',
    previous: 'string',
    results: [
      {
        name: "bulbasaur",
        url: "https://pokeapi.co/api/v2/pokemon/1/"
      },
      {
        name: "ivysaur",
        url: "https://pokeapi.co/api/v2/pokemon/2/"
      },
      {
        name: "venusaur",
        url: "https://pokeapi.co/api/v2/pokemon/3/"
      },
      {
        name: "charmander",
        url: "https://pokeapi.co/api/v2/pokemon/4/"
      },
      {
        name: "charmeleon",
        url: "https://pokeapi.co/api/v2/pokemon/5/"
      },
      {
        name: "charizard",
        url: "https://pokeapi.co/api/v2/pokemon/6/"
      },
      {
        name: "squirtle",
        url: "https://pokeapi.co/api/v2/pokemon/7/"
      },
      {
        name: "wartortle",
        url: "https://pokeapi.co/api/v2/pokemon/8/"
      },
      {
        name: "blastoise",
        url: "https://pokeapi.co/api/v2/pokemon/9/"
      },
      {
        name: "caterpie",
        url: "https://pokeapi.co/api/v2/pokemon/10/"
      }
    ]
  }

  pokemonTeamMember: PokemonDetail | null = {
    id: '1',
    name: 'bulbasaur',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    type: 'grass/poison',
    height: 0,
    weight: 0
  }

  // inject our services
  constructor() { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method, no-empty-function
  ngOnInit(): void {
  }

}


