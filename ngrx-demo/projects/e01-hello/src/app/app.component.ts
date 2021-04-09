import { Component } from '@angular/core';
import { CounterService } from './states/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {

  constructor(public counter: CounterService) { }
}
