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
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
  
@NgModule({
  imports:      [ BrowserModule, 
                  HttpClientModule,
                  FormsModule,
                  HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation:false}),
                  PokemonsModule,
                  LoginRoutingModule,
                  AppRoutingModule ],
  
  declarations: [ AppComponent, 
                  LoginComponent,
                  PageNotFoundComponent],

  bootstrap:    [ AppComponent ],

  providers: [PokemonsService]
})
export class AppModule { }