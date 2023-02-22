import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokePageComponent } from './poke-page/poke-page.component';
import { ResponseComponent } from './response/response.component';
import { SearchComponent } from './search/search.component';



@NgModule({
  declarations: [PokePageComponent, SearchComponent, ResponseComponent],
  exports: [PokePageComponent], // exporta componentes
  imports: [
    CommonModule
  ]
})
export class PokedexModule {  }
