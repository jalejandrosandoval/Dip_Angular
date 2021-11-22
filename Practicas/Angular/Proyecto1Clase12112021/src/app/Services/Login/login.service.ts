import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IUser } from 'src/app/Interfaces/IUser';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // Variables Initialization

  public _User$: Subject<IUser>;

  constructor() {
    this._User$ = new Subject<IUser>();
  }

  // Method that get User Logged in the APP
  public getUser(): Observable<IUser>{
    return this._User$.asObservable();
  }  

  // Method Login User
  public login(_user: IUser){
    this._User$.next(_user);
  }
  
}