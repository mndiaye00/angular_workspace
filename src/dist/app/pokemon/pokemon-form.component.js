"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var pokemon_1 = require("./pokemon");
var pokemons_service_1 = require("./pokemons.service");
var PokemonFormComponent = /** @class */ (function () {
    function PokemonFormComponent(router, pokemonsService) {
        this.router = router;
        this.pokemonsService = pokemonsService;
    }
    PokemonFormComponent.prototype.ngOnInit = function () {
        // Initializing the types property
        this.types = this.pokemonsService.getPokemonsType();
    };
    // Determines whether the type passed in parameters belongs or not to the pokémon being edited.
    PokemonFormComponent.prototype.hasType = function (type) {
        var index = this.pokemon.types.indexOf(type);
        if (index > -1)
            return true;
        return false;
    };
    // Method called when the user adds or removes a type from the pokémon being edited.
    PokemonFormComponent.prototype.selectType = function ($event, type) {
        var checked = $event.target.checked;
        if (checked)
            this.pokemon.types.push(type);
        else {
            var index = this.pokemon.types.indexOf(type);
            if (index > -1)
                this.pokemon.types.splice(index, 1);
        }
    };
    // Validate the number of types for each pokémon
    PokemonFormComponent.prototype.isTypesValid = function (type) {
        if (this.pokemon.types.length === 1 && this.hasType(type))
            return false;
        if (this.pokemon.types.length >= 3 && !this.hasType(type))
            return false;
        return true;
    };
    // The method called when the form is submitted.
    PokemonFormComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log("Submit form !!!");
        this.pokemonsService.updatePokemon(this.pokemon)
            .subscribe(function () { return _this.goBack(); });
    };
    PokemonFormComponent.prototype.goBack = function () {
        var link = ['/pokemon', this.pokemon.id];
        this.router.navigate(link);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", pokemon_1.Pokemon)
    ], PokemonFormComponent.prototype, "pokemon", void 0);
    PokemonFormComponent = __decorate([
        core_1.Component({
            selector: 'pokemon-form',
            templateUrl: './app/pokemon/pokemon-form.component.html',
            styleUrls: ['./app/pokemon/pokemon-form.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router,
            pokemons_service_1.PokemonsService])
    ], PokemonFormComponent);
    return PokemonFormComponent;
}());
exports.PokemonFormComponent = PokemonFormComponent;
//# sourceMappingURL=pokemon-form.component.js.map