import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon, SearchPokemonResponse } from '../interface/poke.interface';

@Injectable({
  providedIn: 'root',
})

export class PokedexService {
  private serviceUrl: string    = 'https://pokeapi.co/api/v2/pokemon/';
  private apiKey    : string    = '';
  private _history  : string[]  = [];

  public results     : Pokemon[] = [];

  get history() {
    return [...this._history];
  }
  constructor(private http: HttpClient) {
    this._history = JSON.parse(localStorage.getItem('history')!) || [];
    this.results   = JSON.parse(localStorage.getItem('result')!)  || [];
  }

  buscarPokemon( query: string = '') {
    query = query.trim().toLowerCase();

    if(!this._history.includes(query)){
      this._history.unshift(query)
      this._history = this._history.splice(0, 10);

      localStorage.setItem('history', JSON.stringify(this._history))
    }

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', query)

      console.log(params.toString())
    this.http
      .get<SearchPokemonResponse>(`${this.serviceUrl}/search`, { params } )
      .subscribe((resp) => {
        console.log(resp.results);
        this.results = resp.results;
        localStorage.setItem('resultados', JSON.stringify(this.results));
      });
  }
}
