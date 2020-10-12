import {Injectable} from "@angular/core";

import { Pokemon } from "./pokemon";

import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, tap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';

@Injectable()

export class PokemonsService{

    /**
     *
     */
    constructor(private http: HttpClient) {}

    private pokemonsUrl = 'api/pokemons';

    httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    private log(log: string){
        console.log(log);
    }

    private handleError<T>(operation="operation", result?: T){
        return(error: any): Observable<T> => {
            console.log(error);
            console.log(`${operation} failed: ${error.message}`);

            return of(result as T);
        }
    }

    updatePokemon(pokemon: Pokemon) : Observable<Pokemon>{

        return this.http.put(this.pokemonsUrl, pokemon, this.httpOptions)
        .pipe(
            tap(_ => this.log(`updated pokemon id =${pokemon.id}`)),
            catchError(this.handleError<any>('updatedPokemon'))
        );
    }

    deletePokemon(pokemon: Pokemon) : Observable<Pokemon>{
        const url = `${this.pokemonsUrl}/${pokemon.id}`;

        return this.http.delete(url, this.httpOptions)
        .pipe(
            tap(_ => this.log(`delete pokemon id =${pokemon.id}`)),
            catchError(this.handleError<any>('deletePokemon'))
        );
    }

    // Retourne tous les pokémons
    getPokemons() : Observable<Pokemon[]> {
        return this.http.get<Pokemon[]>(this.pokemonsUrl)
        .pipe(
            tap(data => console.log(JSON.stringify(data)))
        )  
    }

    // Retourne le pokémon via son identifiant passé en paramètre
    getPokemon(id: number) : Observable<Pokemon>{
        const url = `${this.pokemonsUrl}/${id}`;

        return this.http.get<Pokemon>(url)
        .pipe(
            tap(_ => this.log(`fetched pokemon id = ${id}`)),
            catchError(this.handleError<Pokemon>(`getPokemon id=${id}`))
        );
    }

    getPokemonsType(): string[]{
        return ['Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Électrik', 'Poison', 'Fée', 'Vol'];
    }
}