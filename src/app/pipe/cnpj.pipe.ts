import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cnpj'
})
export class CnpjPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {
      value = value.toString();
      if (value.length === 14) {
        return value.substring(0, 2).concat('.')
          .concat(value.substring(2, 5))
          .concat('.')
          .concat(value.substring(5, 8))
          .concat('/')
          .concat(value.substring(8, 12))
          .concat('-')
          .concat(value.substring(12, 14));
      }
    }
  }
}
