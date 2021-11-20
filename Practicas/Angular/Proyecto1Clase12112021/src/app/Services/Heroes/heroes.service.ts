import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IHeroes } from 'src/app/Interfaces/IHeroes';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  // Variables Initialization

  private _VHeroes: IHeroes[] = [
    // {
    //   Name: "Aquaman",
    //   Bio: "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
    //   Img: "assets/img/aquaman.png",
    //   Aparition: "1941-11-01",
    //   House: "DC"
    // },
    // {
    //   Name: "Batman",
    //   Bio: "Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.",
    //   Img: "assets/img/batman.png",
    //   Aparition: "1939-05-01",
    //   House: "DC"
    // },
    // {
    //   Name: "Daredevil",
    //   Bio: "Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede \"ver\" a través de un \"sexto sentido\" que le sirve como un radar similar al de los murciélagos.",
    //   Img: "assets/img/daredevil.png",
    //   Aparition: "1964-01-01",
    //   House: "Marvel"
    // },
    // {
    //   Name: "Hulk",
    //   Bio: "Su principal poder es su capacidad de aumentar su fuerza hasta niveles prácticamente ilimitados a la vez que aumenta su furia. Dependiendo de qué personalidad de Hulk esté al mando en ese momento (el Hulk Banner es el más débil, pero lo compensa con su inteligencia).",
    //   Img: "assets/img/hulk.png",
    //   Aparition: "1962-05-01",
    //   House: "Marvel"
    // },
    // {
    //   Name: "Linterna Verde",
    //   Bio: "Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sólida mediante la utilización del pensamiento. Es alimentado por la Llama Verde (revisada por escritores posteriores como un poder místico llamado Starheart), una llama mágica contenida en dentro de un orbe (el orbe era en realidad un meteorito verde de metal que cayó a la Tierra, el cual encontró un fabricante de lámparas llamado Chang)",
    //   Img: "assets/img/linterna-verde.png",
    //   Aparition: "1940-06-01",
    //   House: "DC"
    // },
    // {
    //   Name: "Spider-Man",
    //   Bio: "Tras ser mordido por una araña radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o más. Gracias a esta gran fuerza Spider-Man puede realizar saltos íncreibles. Un \"sentido arácnido\", que le permite saber si un peligro se cierne sobre él, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro.",
    //   Img: "assets/img/spiderman.png",
    //   Aparition: "1962-08-01",
    //   House: "Marvel"
    // },
    // {
    //   Name: "Wolverine",
    //   Bio: "En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que ésta sea, además ese mismo poder hace que sea inmune a cualquier enfermedad existente en la Tierra y algunas extraterrestres . Posee también una fuerza sobrehumana, que si bien no se compara con la de otros superhéroes como Hulk, sí sobrepasa la de cualquier humano.",
    //   Img: "assets/img/wolverine.png",
    //   Aparition: "1974-11-01",
    //   House: "Marvel"
    // }
  ];

  private _Heroes$: Subject<IHeroes[]>;
  private _Heroes: IHeroes[] = [];
 

  constructor() {
    this._Heroes$ = new Subject();
    console.log(`Service Heroes OK!`);
  }

  // Get All heroes.
  public getHeroes(): Observable<IHeroes[]> {
    return this._Heroes$.asObservable();
  }

  // Get any heroe by Index.
  public getHeroeByIndex(_index: number): IHeroes {
    return this._Heroes[_index];
  }

  // Method for add the new heroe.
  public addHeroe(_heroes: IHeroes){
    this._Heroes.push(_heroes);
    this._Heroes$.next(this._Heroes);
  }

  // Method for find heroe by any term.
  public searchHeore(term: string): IHeroes[] {
    const search = this._Heroes.map((_heroes, index) => {
      _heroes.Id = index;
      return _heroes;
    }).filter(_heroes =>
      _heroes.Name.toLowerCase().trim().includes(term.toLowerCase().trim()));

    return search;
  }

}