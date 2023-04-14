import { Component } from '@angular/core';

// module js example export <=> public
export const MY_TITLE = 'my-app';

// @Decorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly title = MY_TITLE;
  now = new Date();
  btnDisabled = true;
  randomNum = Math.random();
  bgColor = '#000';
  words = ['Hello', 'world', '!!!'];

  generateRandom(): number {
    // trigger error
    // this.now = new Date();
    return Math.random();
  }

  toggleBtnStatus(): void {
    this.btnDisabled = !this.btnDisabled;
  }
}
