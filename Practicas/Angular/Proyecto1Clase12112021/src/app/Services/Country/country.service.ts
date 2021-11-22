import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { IRestCountries } from 'src/app/Interfaces/IRestCountries';
import { ICountries } from '../../Interfaces/ICountries'

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  // Variables Initialization

  private APIURL_Countries: string = "https://restcountries.com/v2/lang/es";

  constructor(private _httpClient: HttpClient) { }

  // Get the Countries
  public getCountries() {
    return this._httpClient.get<IRestCountries[]>(this.APIURL_Countries)
      .pipe(
        map((resp: IRestCountries[]): ICountries[] =>
          resp.map(
            (_country: IRestCountries): ICountries => (
              {
                Name: _country.name,
                Code: _country.alpha3Code,
                Selected: false
              }
            )
          )
        )
      )
  }

}