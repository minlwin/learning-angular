import { Component, Input } from '@angular/core';
import { BalanceDetails } from '../../../services/balance.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styles: [
  ]
})
export class DetailsComponent {

  @Input() list: readonly BalanceDetails[] | null | undefined
}
