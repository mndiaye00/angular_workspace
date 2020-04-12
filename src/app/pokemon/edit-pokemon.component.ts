import {Component, OnInit} from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { PokemonsService } from "./pokemons.service";
import { Pokemon } from "./pokemon";

@Component({
    selector:'edit-pokemon',
    templateUrl:'./app/pokemon/edit-pokemon.component.html'
})

export class EditPokemonComponent implements OnInit{

    pokemon: Pokemon = null;

    constructor(private pokemonService: PokemonsService, 
                private route: ActivatedRoute){}

    ngOnInit(): void{
        let id = +this.route.snapshot.params['id'];
        this.pokemonService.getPokemon(id)
        .subscribe(pokemon => this.pokemon = pokemon);
    }
}