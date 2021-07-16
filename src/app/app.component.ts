import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  includeLetters: boolean = false;
  includeNumbers: boolean = false;
  includeSymbols: boolean = false;
  password: string = '';

  onIncludeLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onIncludeNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onIncludeSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }
  onClick() {
    console.log(this.includeLetters);
    this.password = 'my password';
  }
}
