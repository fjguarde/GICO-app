import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { User } from '@models/user';
import { ACTION_TYPE } from 'src/app/enums/action-type.enum';

@Component({
  selector: 'gico-users-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.scss'],
})
export class UsersFormComponent implements OnInit {
  @Input() mode!: ACTION_TYPE;
  @Input() user!: User;
  @Output() onCreate = new EventEmitter<User>();
  @Output() onEdit = new EventEmitter<User>();
  @Output() onCancel = new EventEmitter<void>();

  public formGroup!: FormGroup;
  public editMode!: boolean;

  ngOnInit(): void {
    this.formGroup = this.initializeFrom();
    this.editMode = this.mode === ACTION_TYPE.EDIT;
  }

  public submit(formGroup: FormGroup): void {
    if (formGroup.valid) {
      const user = formGroup.getRawValue() as User
      if (this.editMode) {
        this.onEdit.emit(user);
      }else {
        this.onCreate.emit(user);
        this.formGroup = this.initializeFrom();
      }
    } else {
      this.formGroup.markAllAsTouched();
    }
  }

  public cancel(): void {
    this.onCancel.emit()
  }

  private initializeFrom(): FormGroup {
    const {id, firstName, lastName, email} = this.user || {};
    return new FormGroup({
      id: new FormControl(id ?? ''),
      firstName: new FormControl(firstName ??'', [
        Validators.required,
        Validators.minLength(3),
      ]),
      lastName: new FormControl(lastName ?? ''),
      email: new FormControl(email ?? '', [Validators.email]),
    });
  }
}
