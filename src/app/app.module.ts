import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { PokemonsModule } from './pokemon/pokemons.module';
  
import { AppComponent }  from './app.component';

import { PokemonsService } from './pokemon/pokemons.service';
import { PageNotFoundComponent } from './page-not-found.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data-service';
  
@NgModule({
  imports:      [ BrowserModule, 
                  HttpClientModule,
                  HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation:false}),
                  PokemonsModule,
                  AppRoutingModule ],
  
  declarations: [ AppComponent, 
                  PageNotFoundComponent],

  bootstrap:    [ AppComponent ],

  providers: [PokemonsService]
})
export class AppModule { }