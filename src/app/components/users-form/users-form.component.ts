import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { User } from '@models/user';

@Component({
  selector: 'gico-users-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.scss']
})
export class UsersFormComponent implements OnInit{
  @Output() createUser = new EventEmitter<User>();

  public formGroup!: FormGroup;

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.initializeFrom();
  }

  private initializeFrom(): FormGroup {
    return this.fb.group(
      { 
        id: [''],
        firstName: [''],
        lastName: [''],
        email: ['']
      }
      )
  }

  public addUser(formGroup: FormGroup): void {
    this.createUser.emit(formGroup.getRawValue() as User);
  }


}
