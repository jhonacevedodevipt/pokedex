import { Component } from '@angular/core';
import { PokedexService } from '../services/pokedex.service';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})
export class ResponseComponent {
  get results() {
    return this.pokedexService.results;
  }

  constructor( private pokedexService: PokedexService ) { } // importa el servicio en el constructor

}
