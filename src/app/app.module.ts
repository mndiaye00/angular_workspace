import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { AppComponent }  from './app.component';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { DetailPokemonComponent } from './detail-pokemon.component';
import { ListPokemonComponent } from './list-pokemon.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found.component';
  
@NgModule({
  imports:      [ BrowserModule, AppRoutingModule ],
  declarations: [ AppComponent, 
                BorderCardDirective,
                PokemonTypeColorPipe,
                DetailPokemonComponent,
                ListPokemonComponent,
                PageNotFoundComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }