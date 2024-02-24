import { UsersService } from '@services/users.service';
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
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig,
    private readonly usersService: UsersService
    ) {
      this.user = this.config.data?.user;
    }

    public editUser(user: User): void {
      this.usersService.putUser(user.id, user).subscribe(()=> {
        this.closeModal(user.id)
      })
    }

    public closeModal(userId?: string): void {
      this.ref.close(userId)
    }

}
