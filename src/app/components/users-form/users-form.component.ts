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
  @Output() createUser = new EventEmitter<User>();

  public formGroup!: FormGroup;
  public editMode!: boolean;

  ngOnInit(): void {
    this.formGroup = this.initializeFrom();
  }

  private initializeFrom(): FormGroup {
    return new FormGroup({
      id: new FormControl(''),
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      lastName: new FormControl(''),
      email: new FormControl(''),
    });
  }

  public addUser(formGroup: FormGroup): void {
    if (formGroup.valid) {
      this.createUser.emit(formGroup.getRawValue() as User);
      this.formGroup = this.initializeFrom();
    } else {
      this.formGroup.markAllAsTouched();
    }
  }
}
