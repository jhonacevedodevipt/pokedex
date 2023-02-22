import { Component, ElementRef, ViewChild } from '@angular/core';
import { PokedexService } from '../services/pokedex.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  
  @ViewChild('txtSearch') txtSearch!: ElementRef<HTMLInputElement>

  constructor( private PokedexService: PokedexService) { } // importar servicio

  search() {

    const value = this.txtSearch.nativeElement.value;

    if(value.trim().length === 0) {
      return;
    }

    this.PokedexService.searchPokemon(value);
    this.txtSearch.nativeElement.value = '';
  }

}
