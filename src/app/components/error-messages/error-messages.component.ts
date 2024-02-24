import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'gico-error-messages',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <div *ngIf="control?.invalid && (control?.dirty || control?.touched)">
      <div *ngFor="let error of getErrorMessages()">{{ error }}</div>
    </div>
  `,
  styles: [
    `
      div {
        color: red;
        margin-top: 5px;
      }
    `,
  ],
})
export class ErrorMessagesComponent {
  @Input() control!: AbstractControl | null;

  constructor(private readonly translateService: TranslateService) {}

  public getErrorMessages(): string[] {
    const messages: string[] = [];

    if (this.control?.errors) {
      for (const key in this.control.errors) {
        if (this.control.errors.hasOwnProperty(key)) {
          switch (key) {
            case 'required':
              messages.push(
                this.translate('COMMON.ERROR_MESSAGES.REQUIRED_FIELD')
              );
              break;
            case 'minlength':
              messages.push(
                `${this.translate('COMMON.ERROR_MESSAGES.MINIMUM')} ${
                  this.control.errors['minlength'].requiredLength
                } ${this.translate('COMMON.ERROR_MESSAGES.CHARACTERS')}`
              );
              break;
            case 'maxlength':
              messages.push(
                `${this.translate('COMMON.ERROR_MESSAGES.MAXIMUM')} ${
                  this.control.errors['maxlength'].requiredLength
                } ${this.translate('COMMON.ERROR_MESSAGES.CHARACTERS')}`
              );
              break;
            case 'email':
              messages.push(this.translate('COMMON.ERROR_MESSAGES.INVALID_FORMAT'));
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

  private translate(text: string): string {
    return this.translateService.instant(text);
  }
}
