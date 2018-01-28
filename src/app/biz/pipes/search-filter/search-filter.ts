import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the SearchFilterPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {
  transform(items: any[], field: string, value: string, expression: string = 'E'): any[] {
    if (!items) return [];
    if (expression === 'E')
      return items.filter(it => it[field] === value);
    else if (expression === 'NE')
      return items.filter(it => it[field] !== value);
  }
}
