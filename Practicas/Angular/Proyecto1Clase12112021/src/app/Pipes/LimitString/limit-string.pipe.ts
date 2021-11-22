import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitStringPipe'
})
export class LimitStringPipe implements PipeTransform {

  transform(_value: string,  _limit: number): string {
    return (_value.length > _limit) ? `${_value.substring(0, _limit)}...` : _value;
  }

}
