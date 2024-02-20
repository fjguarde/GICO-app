import { Component } from '@angular/core';
import { UsersFormComponent } from '@components/users-form/users-form.component';
import { User } from '@models/user';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'gico-user-edit-modal',
  standalone: true,
  imports: [UsersFormComponent],
  templateUrl: './user-edit-modal.component.html',
  styleUrl: './user-edit-modal.component.scss'
})
export class UserEditModalComponent {
  public user!: User;

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
    ) {
      this.user = config.data?.user;
    }

}
