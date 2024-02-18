import { UsersFormComponent } from 'src/app/components/users-form/users-form.component';
import { UsersTableComponent } from './../../components/users-table/users-table.component';
import { Component } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'gico-user-list-page',
  standalone: true,
  imports: [UsersTableComponent, UsersFormComponent],
  templateUrl: './user-list-page.component.html',
  styleUrls: ['./user-list-page.component.scss']
})
export class UserListPageComponent {
  public readonly userList: User[] = [
    {id: 1, firstName: 'Fabian', lastName: 'Perez', email: 'fperez@gmail.com'},
    {id: 2, firstName: 'Cesar', lastName: 'Pereira', email: 'cp@gmail.com'},
  ]

}
