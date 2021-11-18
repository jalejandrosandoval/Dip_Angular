import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upercase'
})
export class UpercasePipe implements PipeTransform {

  transform(value: string): string {
    return value.toUpperCase();
  }

}
