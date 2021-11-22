import { Component, OnInit } from '@angular/core';
import { ICountries } from 'src/app/Interfaces/ICountries';
import { IPerson } from 'src/app/Interfaces/IPerson';
import { CountryService } from 'src/app/Services/Country/country.service';

@Component({
  selector: 'app-form-ng-model',
  templateUrl: './form-ng-model.component.html',
  styleUrls: ['./form-ng-model.component.css']
})
export class FormNgModelComponent implements OnInit {

  _Country: ICountries[] = [];
  _Person: IPerson = {} as IPerson;

  constructor(private _CountryService: CountryService) { }

  ngOnInit(): void {
    this._CountryService.getCountries().subscribe(country => {
      this._Country = country;
      this._Country.map((elem, i) => {
        if (i == 1) {
          this._Person.CountryModel = elem.Code;
        }
        return elem;
      })
    })
  }

  public saveForm() {
    let _person = sessionStorage.setItem('form', JSON.stringify(this._Person));
    console.log(JSON.stringify(_person));
  }

  public getPerson() {
    let _person = sessionStorage.getItem('form') || "";
    console.log(JSON.parse(_person));
  }


}