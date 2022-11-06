import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  name: string;
  urlImage: string;
  name2: string;
  type: string;
  health: string;
  attack: string;
  defense: string;
  speed: string;

  name3: Array<any> = [];

  constructor(private pokemonService : PokemonService) { }

  ngOnInit(): void {

    this.pokemonService.getPokemon2().subscribe((data: any) => {
      this.name3 = data.results;
      console.log(data.results.name);
    })
    
  }

    search(){
      this.pokemonService.getPokemon(this.name).subscribe((data: any) => {
        this.urlImage = data.sprites.other.home.front_default;
        this.name2 = data.name
        this.type = data.types[0].type.name;
        this.health = data.stats[0].base_stat;
        this.attack = data.stats[1].base_stat;
        this.defense = data.stats[2].base_stat;
        this.speed = data.stats[5].base_stat;
        console.log(data);
      })
    }
}
