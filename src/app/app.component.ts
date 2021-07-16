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
  passwordLength: number = 0;

  onIncludeLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onIncludeNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onIncludeSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  onPasswordLength(e: Event) {
    const ParseValue = parseInt((e.target as HTMLInputElement).value);

    if (!isNaN(ParseValue)) {
      this.passwordLength = ParseValue;
    }
    console.log(this.passwordLength);
  }
  onClick() {
    const letters = 'ghdadfsf';
    const numbers = '12358';
    const symbols = '^%$#$@@';

    let valid = '';

    if (this.includeLetters) {
      valid += letters;
    }
    if (this.includeNumbers) {
      valid += numbers;
    }
    if (this.includeSymbols) {
      valid += symbols;
    }

    let generatedPassword = '';

    for (let i = 0; i < this.passwordLength; i++) {
      const index = Math.floor(Math.random() * valid.length);
      generatedPassword += valid[index];
    }

    this.password = generatedPassword;
  }
}
