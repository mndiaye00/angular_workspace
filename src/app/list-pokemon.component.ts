import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';

import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemon';

@Component ({
    selector: 'list-pokemon',
    templateUrl: './app/list-pokemon.component.html'
})

export class ListPokemonComponent implements OnInit{

    private pokemons : Pokemon[] = null;
    private title : string = "Liste des pokémons";

    constructor(private router: Router){}

    ngOnInit() : void{
        this.pokemons = POKEMONS;
    }

    selectPokemon(pokemon: Pokemon) : void{
        console.log(pokemon.name);

        let link = ['/pokemons', pokemon.id];
        this.router.navigate(link);
    }
}