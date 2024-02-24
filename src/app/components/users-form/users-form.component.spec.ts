import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  Validators,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { UsersFormComponent } from './users-form.component';
import { User } from '@models/user';
import { ACTION_TYPE } from 'src/app/enums/action-type.enum';
import { ErrorMessagesComponent } from '@components/error-messages/error-messages.component';
import { TranslateModule } from '@ngx-translate/core';

describe('UsersFormComponent', () => {
  let component: UsersFormComponent;
  let fixture: ComponentFixture<UsersFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        ReactiveFormsModule,
        UsersFormComponent,
        ErrorMessagesComponent,
        TranslateModule.forRoot(),
      ],
    });

    fixture = TestBed.createComponent(UsersFormComponent);
    component = fixture.componentInstance;

    // Mock Input values
    component.user = {
      id: '99',
      firstName: 'Francisco',
      lastName: 'Guarde',
      email: 'fjguarde@gmail.com',
    } as User;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form on init', () => {
    fixture.detectChanges();
    expect(component.formGroup).toBeDefined();
    expect(component.editMode).toBeFalsy();
  });

  it('should emit onCreate event on submit in create mode', () => {
    spyOn(component.onCreate, 'emit');
    component.mode = ACTION_TYPE.CREATE;
    fixture.detectChanges();

    component.submit(component.formGroup);

    expect(component.onCreate.emit).toHaveBeenCalledOnceWith(
      component.formGroup.getRawValue()
    );
  });

  it('should emit onEdit event on submit in edit mode', () => {
    spyOn(component.onEdit, 'emit');

    component.mode = ACTION_TYPE.EDIT;
    fixture.detectChanges();

    component.submit(component.formGroup);

    expect(component.onEdit.emit).toHaveBeenCalledOnceWith(
      component.formGroup.getRawValue()
    );
  });

  it('should emit onCancel event on cancel', () => {
    spyOn(component.onCancel, 'emit');

    component.cancel();

    expect(component.onCancel.emit).toHaveBeenCalled();
  });

  it('should mark all controls as touched on invalid submit', () => {
    component.formGroup = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
    });

    spyOn(component.formGroup, 'markAllAsTouched');

    component.submit(component.formGroup);

    expect(component.formGroup.markAllAsTouched).toHaveBeenCalled();
  });
});
