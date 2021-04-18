import { Pipe, PipeTransform } from '@angular/core';
import { District, State, Township } from '../app-store/app.model';

@Pipe({
  name: 'state'
})
export class StatePipe implements PipeTransform {

  transform(value: Township | District | State | number): string {
    // Township
    if (typeof value != 'number' && 'district' in value) {
      const township = value as Township
      const district = township.district as District
      const state = district.state as State
      return state.name
    }

    // District
    if (typeof value != 'number' && 'state' in value) {
      const district = value as District
      const state = district.state as State
      return state.name
    }

    // State
    if (typeof value != 'number' && 'region' in value) {
      const state = value as State
      return state.name
    }

    return String(value);
  }

}
