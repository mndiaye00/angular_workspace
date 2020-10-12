import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from './pokemon';
import { PokemonsService } from './pokemons.service';

@Component ({
    selector: 'list-pokemon',
    templateUrl: './app/pokemon/list-pokemon.component.html',
})

export class ListPokemonComponent implements OnInit{

    pokemons : Pokemon[] = null;
    title : string = "Liste des pokémons";

    constructor(
        private router: Router, 
        private pokemonsService: PokemonsService){
            if(router == null) {
                throw Error("router is null or undefined");
            }
            if(pokemonsService == null) {
                throw Error("pokemonService is null or undefined");
            }
        }

    ngOnInit() : void{
        this.pokemonsService.getPokemons()
        .subscribe(pokemons => this.pokemons = pokemons);
    }

    selectPokemon(pokemon: Pokemon) : void{
        console.log('Vous avez sélectionné ' + pokemon.name); 

        let link = ['/pokemon', pokemon.id];
        this.router.navigate(link);
    }
}