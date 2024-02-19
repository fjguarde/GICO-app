import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
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

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.initializeFrom();
  }

  private initializeFrom(): FormGroup {
    return this.fb.group({
      id: [''],
      firstName: [''],
      lastName: [''],
      email: [''],
    });
  }

  public addUser(formGroup: FormGroup): void {
    this.createUser.emit(formGroup.getRawValue() as User);
    this.formGroup = this.initializeFrom();
  }
}
