import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'gico-error-messages',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="control?.invalid && (control?.dirty || control?.touched)">
      <div *ngFor="let error of getErrorMessages()">{{ error }}</div>
    </div>
  `,
  styles: [`
    div {
      color: red;
      margin-top: 5px;
    }
  `]
})
export class ErrorMessagesComponent {
  @Input() control!: AbstractControl | null;

  getErrorMessages(): string[] {
    const messages: string[] = [];

    if (this.control?.errors) {
      for (const key in this.control.errors) {
        if (this.control.errors.hasOwnProperty(key)) {
          switch (key) {
            case 'required':
              messages.push('Field required');
              break;
            case 'minlength':
              messages.push(`At least ${this.control.errors['minlength'].requiredLength} characters`);
              break;
            case 'maxlength':
              messages.push(`Maximum ${this.control.errors['maxlength'].requiredLength} characters`);
              break;
            case 'email':
              messages.push(`Invalid email format`);
              break;
            
            default:
              messages.push(`Error: ${key}`);
              break;
          }
        }
      }
    }

    return messages;
  }
}
