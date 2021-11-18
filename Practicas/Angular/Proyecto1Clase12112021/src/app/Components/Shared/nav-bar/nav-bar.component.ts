import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  // Method to find a heroe from any term. 
  public searchHeroe(term: string){
    this._router.navigate(['/search', term]);
  }

}
