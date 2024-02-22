import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, Validators, FormControl } from '@angular/forms';
import { ErrorMessagesComponent } from './error-messages.component';

describe('ErrorMessagesComponent', () => {
  let component: ErrorMessagesComponent;
  let fixture: ComponentFixture<ErrorMessagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, FormsModule, ReactiveFormsModule, ErrorMessagesComponent],
    });

    fixture = TestBed.createComponent(ErrorMessagesComponent);
    component = fixture.componentInstance;
  });

  it('should display required error message', () => {
    const control = new FormControl('', { validators: Validators.required });
    component.control = control;
    fixture.detectChanges();
    expect(component.getErrorMessages().includes('Field required')).toBeTrue()
  });
});