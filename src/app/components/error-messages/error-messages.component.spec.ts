import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule,
  Validators,
  FormControl,
} from '@angular/forms';
import { ErrorMessagesComponent } from './error-messages.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

describe('ErrorMessagesComponent', () => {
  let component: ErrorMessagesComponent;
  let fixture: ComponentFixture<ErrorMessagesComponent>;
  let translate: TranslateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ErrorMessagesComponent,
        TranslateModule.forRoot(),
      ],
    });

    fixture = TestBed.createComponent(ErrorMessagesComponent);
    component = fixture.componentInstance;
    translate = TestBed.inject(TranslateService);
  });

  it('should display required error message', () => {
    const control = new FormControl('', { validators: Validators.required });
    component.control = control;
    fixture.detectChanges();
    expect(
      component
        .getErrorMessages()
        .includes(translate.instant('COMMON.ERROR_MESSAGES.REQUIRED_FIELD'))
    ).toBeTrue();
  });
});
