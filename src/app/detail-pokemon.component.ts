import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router, Params} from "@angular/router";

import { Pokemon } from "./pokemon";
import { POKEMONS } from "./mock-pokemon";

@Component({
    selector: 'detail-pokemon',
    templateUrl: './app/detail-pokemon.component.html'
})

export class DetailPokemonComponent implements OnInit{

    constructor(private route:ActivatedRoute, private router: Router){}

    private pokemons : Pokemon[] = null;
    private pokemon: Pokemon = null;

    ngOnInit(): void{
        this.pokemons = POKEMONS;

        // Récupéré l'identifiant du pokémon courant dans la liste des pokémons.
        let id = +this.route.snapshot.paramMap.get('id');

        console.log("Identifiant = " + id);

        for(let i=0; i<this.pokemons.length; i++){
            if(id == this.pokemons[i].id){
                this.pokemon = this.pokemons[i]; 
            }
        }
    }

    goBack(): void{
        this.router.navigate(['/pokemons']);
    }

}