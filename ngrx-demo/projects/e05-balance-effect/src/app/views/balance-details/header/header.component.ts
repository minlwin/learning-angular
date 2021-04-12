import { Component, Input } from '@angular/core';
import { Balance } from '../../../services/balance.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent {

  @Input() balance: Balance | null | undefined
}
