import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IUser } from 'src/app/Interfaces/IUser';
import { LoginService } from 'src/app/Services/Login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // Variables Initialization

  _User: IUser = {
    FirstName: "Alejandro",
    LastName: "Sandoval",
    Username: "Alejandro123",
    UserPassword: "123"
  }

  constructor(private _loginService: LoginService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this._loginService.getUser().subscribe(
      _user => {
        this._User = _user;
      }
    );
  }

  //Initializing form fields
  loginForm = this.formBuilder.group({
    Username: ['', {
      Validators: [Validators.required]
    }],

    UserPassword: ['', {
      Validators: [Validators.required]
    }]
  });

  //Getting Data Fields
  public get gUsername() {
    return this.loginForm.get('Username');
  }

  public get gPassword() {
    return this.loginForm.get('UserPassword');
  }

  // Method Of Login
  public onLogin() {
    if (this.loginForm.valid) {

      let _UserModel: IUser;
      _UserModel = Object.assign({}, this.loginForm.value);
      _UserModel.FirstName = "Default FN";
      _UserModel.LastName = "Default LN";

      this._loginService.login(_UserModel);
    }
  }

}