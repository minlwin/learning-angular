import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HelloComponent } from './hello/hello.component';
import { WidgetsModule } from './widgets/widgets.module';

@Component({
  standalone: true,
  imports: [CommonModule, WidgetsModule, HelloComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
}
