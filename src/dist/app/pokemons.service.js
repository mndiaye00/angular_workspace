"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var mock_pokemon_1 = require("./mock-pokemon");
var PokemonsService = /** @class */ (function () {
    function PokemonsService() {
    }
    // Retourne tous les pokémons
    PokemonsService.prototype.getPokemons = function () {
        return mock_pokemon_1.POKEMONS;
    };
    // Retourne le pokémon via son identifiant passé en paramètre
    PokemonsService.prototype.getPokemon = function (id) {
        var pokemons = this.getPokemons();
        for (var index = 0; index < pokemons.length; index++) {
            if (id === pokemons[index].id) {
                return pokemons[index];
            }
        }
    };
    PokemonsService = __decorate([
        core_1.Injectable()
    ], PokemonsService);
    return PokemonsService;
}());
exports.PokemonsService = PokemonsService;
//# sourceMappingURL=pokemons.service.js.map