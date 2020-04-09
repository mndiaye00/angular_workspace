import { InMemoryDbService } from 'angular-in-memory-web-api';
import { POKEMONS } from './pokemon/mock-pokemon';
  
export class InMemoryDataService implements InMemoryDbService {
    
    createDb() {
        let pokemons = POKEMONS;
        return { pokemons };
    }
}