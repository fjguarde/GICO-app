import { UsersFormComponent } from 'src/app/components/users-form/users-form.component';
import { UsersTableComponent } from './../../components/users-table/users-table.component';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UsersService } from '@services/users.service';
import { HttpClientModule } from '@angular/common/http';
import { ACTION_TYPE } from 'src/app/enums/action-type.enum';

@Component({
  selector: 'gico-user-list-page',
  standalone: true,
  imports: [UsersTableComponent, UsersFormComponent, HttpClientModule],
  providers: [UsersService],
  templateUrl: './user-list-page.component.html',
  styleUrls: ['./user-list-page.component.scss'],
})
export class UserListPageComponent implements OnInit {
  public userList: User[] = [];
  public ACTION_TYPE = ACTION_TYPE;

  constructor(private readonly userService: UsersService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers(): void {
    this.userService
      .getUsers()
      .subscribe((users: User[]) => (this.userList = users));
  }

  public onTableAction(action: { action: string; value: any }): void {
    console.log(action);
  }

  public createUser(user: User): void {
    const newUser = {
      ...user,
      id: this.calculateNextId(this.userList),
    };
    this.userService.postUser(newUser).subscribe((userId) => {
      //Show toast
      this.getUsers();
    });
  }

  private calculateNextId(userList: User[]): number {
    const sortedUsers = userList.slice().sort((a, b) => b.id - a.id);
    return sortedUsers.length > 0 ? Number(sortedUsers[0].id) + 1 : 1;
  }
}
