import { Component } from '@angular/core';
import { Pokemon } from './pokemon';
import { OnInit } from "@angular/core";

@Component ({
    selector: 'pokemon-app',
    template: `<h1>Hello {{ name }}</h1>`
})

export class AppComponent implements OnInit{
    name = "Moussa";

    ngOnInit(){

    }

    private pokemons : Pokemon[];


}