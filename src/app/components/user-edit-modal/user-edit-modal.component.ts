import { Component } from '@angular/core';
import { UsersFormComponent } from '@components/users-form/users-form.component';
import { User } from '@models/user';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ACTION_TYPE } from 'src/app/enums/action-type.enum';

@Component({
  selector: 'gico-user-edit-modal',
  standalone: true,
  imports: [UsersFormComponent],
  templateUrl: './user-edit-modal.component.html',
  styleUrl: './user-edit-modal.component.scss'
})
export class UserEditModalComponent {
  public user!: User;
  public mode: ACTION_TYPE = ACTION_TYPE.EDIT;

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
    ) {
      this.user = config.data?.user;
    }

}
