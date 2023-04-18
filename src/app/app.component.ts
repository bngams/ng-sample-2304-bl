import { Component } from '@angular/core';

// @Decorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';

  hello(): string {
    return this.title + '!!';
  }
}
