import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpf'
})
export class CpfPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if (value) {
      value = value.toString();
      value = value.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
      if (value.length === 11) {
        return value.substring(0, 3).concat('.')
          .concat(value.substring(3, 6))
          .concat('.')
          .concat(value.substring(6, 9))
          .concat('-')
          .concat(value.substring(9, 11));
      }
    } else {
      value = '-';
    }
    return value;
  }

}
