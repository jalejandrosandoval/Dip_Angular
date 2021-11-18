import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'passwordPipe'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, _show: boolean): string {

    return (_show) ? '*'.repeat(value.length) : value;
  }

}
