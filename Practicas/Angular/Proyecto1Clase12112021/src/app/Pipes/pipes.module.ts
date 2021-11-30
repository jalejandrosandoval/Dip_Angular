import { NgModule } from '@angular/core';

// Import Pipes
import { PasswordPipe } from './Password/password.pipe';
import { CapitalizePipePipe } from './CapitalizePipe/capitalize-pipe.pipe';
import { LimitStringPipe } from './LimitString/limit-string.pipe';
import { SecureDOMPipe } from './SecureDOM/secure-dom.pipe';
import { UpercasePipe } from './Upercase/upercase.pipe';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    PasswordPipe,
    UpercasePipe,
    CapitalizePipePipe,
    LimitStringPipe,
    SecureDOMPipe
  ],
  exports: [
    CommonModule,
    PasswordPipe,
    UpercasePipe,
    CapitalizePipePipe,
    LimitStringPipe,
    SecureDOMPipe
  ]
})
export class PipesModule { }