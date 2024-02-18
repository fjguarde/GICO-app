import { UsersFormComponent } from 'src/app/components/users-form/users-form.component';
import { UsersTableComponent } from './../../components/users-table/users-table.component';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UsersService } from '@services/users.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'gico-user-list-page',
  standalone: true,
  imports: [UsersTableComponent, UsersFormComponent, HttpClientModule],
  providers: [UsersService],
  templateUrl: './user-list-page.component.html',
  styleUrls: ['./user-list-page.component.scss']
})
export class UserListPageComponent implements OnInit {
  public userList: User[] = [];

  constructor(private readonly userService: UsersService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers(): void {
    this.userService.getUsers()
      .subscribe((users: User[])=> this.userList = users )
  }

  public createUser(user: User): void {
    this.userService.postUser(user)
      .subscribe((userId)=> {
        //Show toast
      this.getUsers();
      })
  }
}
