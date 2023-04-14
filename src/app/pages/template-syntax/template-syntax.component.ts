import { Component } from '@angular/core';

// module js example export <=> public
export const MY_TITLE = 'my-app';

/**
 * /!\ Name length (path length)
 */
@Component({
  selector: 'app-template-syntax',
  templateUrl: './template-syntax.component.html',
  styleUrls: ['./template-syntax.component.scss']
})
export class TemplateSyntaxComponent {
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
