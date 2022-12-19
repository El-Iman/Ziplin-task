import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(orders: any[], fields?: any): any {
    if (!orders || !Object.keys(fields).length) {
      return orders;
    } 

    let filterKeys = Object.keys(fields); 
    return orders.filter(item => {
      return filterKeys.every(keyName => {
        return (
          new RegExp(fields[keyName], 'gi').test(item[keyName]) ||
          fields[keyName] === ''
        );
      });
    });

  }

}
