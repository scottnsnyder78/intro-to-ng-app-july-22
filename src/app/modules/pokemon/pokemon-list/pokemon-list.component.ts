import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  @Input() pokemonList: any;

  selectedPokemon: any;

  constructor() { }

  ngOnInit(): void {
  }

}
