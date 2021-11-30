import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  // Variables Initialization
  ReactiveForm: FormGroup = new FormGroup({});

  objetDataReactiveForm!: {
    DateCreate: '';
    Name: '';
    Email: '';
    Password: '';
    Address: {
      Street: '';
      Avenue: '';
    };
  };

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.BuildForm();
  }

  // Method for initialization of ReactiveForm
  public BuildForm() {
    this.ReactiveForm = this.formBuilder.group({
      DateCreate: [/*new Date().toISOString().substring(0, 10)*/],
      Name: ['', {
        Validators: [Validators.required]
      }],
      Email: ['', {
        Validators: [
          Validators.required,
          Validators.email, 
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')
        ]
      }],
      Password: ['', {
        Validators: [
          Validators.required,
          Validators.minLength(5),
          this.validatePassword
        ]
      }],
      Address : this.formBuilder.group(
        {
          Street: ['', {
            Validators: [
              Validators.required
            ]
          }],
          Avenue: ['', {
            Validators: [
              Validators.required
            ]
          }]
        }
      )
    });
  }

  // Validate the Password
  private validatePassword(_control: AbstractControl) {
    const _Password = _control.value;
    let error = null;
    
    if(!_Password.includes('$'))
      error = {
        pesos: 'Es Requerido el signo $...'
      };
    
    if(!parseFloat(_Password[0]))
      error = {
        ...error, 
        number: 'La contraseña debe iniciar con número...'
      }

    return error;

  }

  // Get any error
  public getError(_controlName: string){
    let _error = '';
    let control = this.ReactiveForm.get(_controlName);

    if (control!.touched && control!.errors != null) {
      _error = JSON.stringify(control!.errors);
    }
    return _error;
  }

  // Method for get the fields of Form
  private get gDateCreate(): AbstractControl {
    return this.ReactiveForm.get('DateCreate')!;
  };

  private get gUsername(): AbstractControl {
    return this.ReactiveForm.get('Name')!;
  };

  private get gEmail(): AbstractControl{
    return this.ReactiveForm.get('Email')!;
  }

  private get gPassword(): AbstractControl{
    return this.ReactiveForm.get('Password')!;
  }

  private get gAddressStreet(): AbstractControl{
    return this.ReactiveForm.get('Address.Street')!;
  }

  private get gAddressAvenue(): AbstractControl{
    return this.ReactiveForm.get('Address.Avenue')!;
  }
  
  // Method for validate the fields
  public get gDateCreateValid() {
    return this.gDateCreate.invalid && (this.gDateCreate.touched || this.gDateCreate.dirty);
  }

  public get gUsernameValid() {
    return this.gUsername.invalid && (this.gUsername.touched || this.gUsername.dirty);
  }

  public get gEmailValid(){
    return this.gEmail.invalid && (this.gEmail.touched || this.gEmail.dirty);
  }

  public get gPasswordValid(){
    return this.gPassword.invalid && (this.gPassword.touched || this.gPassword.dirty);
  }

  public get gReactiveFormValid(){
    return this.gUsernameValid || this.gPasswordValid || this.gDateCreateValid || this.gEmailValid;
  }

  public get gAddressStreetValid(){
    return this.gAddressStreet.invalid && (this.gAddressStreet.touched || this.gAddressStreet.dirty);
  }

  public get gAddressAvenueValid(){
    return this.gAddressAvenue.invalid && (this.gAddressAvenue.touched || this.gAddressAvenue.dirty);
  }

  // Save the data of Form
  public onSave() {
    console.log(this.ReactiveForm);
  }
  
  // Reset of Data
  public onReset() {
    this.ReactiveForm.reset({});
  }

}