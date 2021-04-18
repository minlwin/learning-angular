import { Pipe, PipeTransform } from '@angular/core';
import { District, Township } from '../app-store/app.model';

@Pipe({
  name: 'district'
})
export class DistrictPipe implements PipeTransform {

  transform(value: Township | District | number): string {
    // Township
    if (typeof value != 'number' && 'district' in value) {
      const township = value as Township
      const district = township.district as District
      return district.name
    }

    // District
    if (typeof value != 'number' && 'state' in value) {
      const district = value as District
      return district.name
    }

    return String(value);
  }

}
