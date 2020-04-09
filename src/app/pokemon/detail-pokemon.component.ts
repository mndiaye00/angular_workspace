import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router, Params} from "@angular/router";

import { Pokemon } from "./pokemon";
import {PokemonsService} from "./pokemons.service";

@Component({
    selector: 'detail-pokemon',
    templateUrl: './app/pokemon/detail-pokemon.component.html',
    styleUrls: ['./app/pokemon/detail-pokemon.component.css']
})

export class DetailPokemonComponent implements OnInit{

    imageWidth: number = 100;
    imageMargin: number = 5;

    constructor(private route:ActivatedRoute, 
                private router: Router, 
                private pokemonsService: PokemonsService){}

    private pokemon: Pokemon = null;

    ngOnInit(): void{

        // Récupéré l'identifiant du pokémon courant dans la liste des pokémons.
        let id = +this.route.snapshot.paramMap.get('id');

        this.pokemonsService.getPokemon(id)
            .subscribe(pokemon => this.pokemon = pokemon);
    }

    delete(pokemon: Pokemon) : void{
        this.pokemonsService.deletePokemon(pokemon)
            .subscribe(_ => this.goBack());
    }

    goBack(): void{
        this.router.navigate(['/pokemons']);
    }

    goEdit(pokemon: Pokemon): void{
        this.router.navigate(['/pokemon/edit', this.pokemon.id]);
    }

}