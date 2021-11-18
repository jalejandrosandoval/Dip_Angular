import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-pipe',
  templateUrl: './example-pipe.component.html',
  styleUrls: ['./example-pipe.component.css']
})
export class ExamplePipeComponent implements OnInit {

  // Variables Initialization

  _Name: string = 'Jhon Alejandro Sandoval Miranda';
  _Name2: string = 'JhON AlEjAndRo SanDoVaL MiRaNdA'; 
  PI: number = Math.PI;
  _Percent: number = 0.236;
  _Salary: number = 1234.5;
  _Date: Date = new Date();
  _ActivePassword: boolean = false;
  _Language: string = 'fr';

  valorPromesa = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('Data OK!')
    }, 5000)
  });

  _Heroe = {
    Name: 'logan',
    Age: 1000,
    OtherNames: {
      Name1: 'wolverine',
      Name2: 'viejo'
    }
  }

  video: string = 'https://www.youtube.com/embed/qBtB-xcJp4c';

  constructor() { }

  ngOnInit(): void {
  }

}