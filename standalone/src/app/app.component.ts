import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HelloComponent } from './hello/hello.component';

@Component({
  standalone: true,
  imports: [CommonModule, HelloComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'standalone';
}
