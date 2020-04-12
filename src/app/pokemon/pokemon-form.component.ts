import {Component, OnInit, Input} from "@angular/core"
import { Router } from "@angular/router";

import { Pokemon } from "./pokemon";
import { PokemonsService } from "./pokemons.service"; 

@Component({
    selector:'pokemon-form',
    templateUrl:'./app/pokemon/pokemon-form.component.html',
    styleUrls:['./app/pokemon/pokemon-form.component.css']
})

export class PokemonFormComponent implements OnInit{

    // component input property
    @Input() pokemon: Pokemon;

    // Possible types of a pokemon
    types: Array<string>;

    constructor(private router:Router,
                private pokemonsService: PokemonsService){}

    ngOnInit(){

        // Initializing the types property
        this.types = this.pokemonsService.getPokemonsType();
    }

    // Determines whether the type passed in parameters belongs or not to the pokémon being edited.
    hasType(type: string): boolean{
        let index = this.pokemon.types.indexOf(type);

        if(index > -1)
            return true;
        return false;
    }

    // Method called when the user adds or removes a type from the pokémon being edited.
    selectType($event: any, type: string){
        let checked = $event.target.checked;

        if(checked)
            this.pokemon.types.push(type);
        else{
            let index = this.pokemon.types.indexOf(type);
            if(index > -1)
                this.pokemon.types.splice(index, 1);
        }
    }

    // Validate the number of types for each pokémon
    isTypesValid(type: string): boolean{
        if(this.pokemon.types.length === 1 && this.hasType(type)) 
            return false;
        if(this.pokemon.types.length >= 3 && !this.hasType(type))
            return false;
        return true;
    }

    // The method called when the form is submitted.
    onSubmit(): void{
        console.log("Submit form !!!");

        this.pokemonsService.updatePokemon(this.pokemon)
        .subscribe(() => this.goBack());
    }

    goBack(): void{
        let link = ['/pokemon', this.pokemon.id];

        this.router.navigate(link);
    }
}