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
var mock_pokemon_1 = require("./mock-pokemon");
var DetailPokemonComponent = /** @class */ (function () {
    function DetailPokemonComponent(route, router) {
        this.route = route;
        this.router = router;
        this.pokemons = null;
        this.pokemon = null;
    }
    DetailPokemonComponent.prototype.ngOnInit = function () {
        this.pokemons = mock_pokemon_1.POKEMONS;
        // Récupéré l'identifiant du pokémon courant dans la liste des pokémons.
        var id = +this.route.snapshot.paramMap.get('id');
        console.log("Identifiant = " + id);
        for (var i = 0; i < this.pokemons.length; i++) {
            if (id == this.pokemons[i].id) {
                this.pokemon = this.pokemons[i];
            }
        }
    };
    DetailPokemonComponent.prototype.goBack = function () {
        this.router.navigate(['/pokemons']);
    };
    DetailPokemonComponent = __decorate([
        core_1.Component({
            selector: 'detail-pokemon',
            templateUrl: './app/detail-pokemon.component.html'
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router])
    ], DetailPokemonComponent);
    return DetailPokemonComponent;
}());
exports.DetailPokemonComponent = DetailPokemonComponent;
//# sourceMappingURL=detail-pokemon.component.js.map