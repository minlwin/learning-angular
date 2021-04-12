import { Pipe, PipeTransform } from '@angular/core';
import { Category } from '../services/category.service';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: Category | '' | null | undefined): string {
    return value ? value.name : '';
  }

}
