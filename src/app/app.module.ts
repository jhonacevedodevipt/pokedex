import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { UserComponent } from './user/user.component';
import { SearchComponent } from './pokedex/search/search.component';
import { ResponseComponent } from './pokedex/response/response.component';
import { PokePageComponent } from './pokedex/poke-page/poke-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PokedexComponent,
    UserComponent,
    SearchComponent,
    ResponseComponent,
    PokePageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
