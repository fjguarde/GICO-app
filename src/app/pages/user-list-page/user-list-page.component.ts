import { UsersFormComponent } from 'src/app/components/users-form/users-form.component';
import { UsersTableComponent } from './../../components/users-table/users-table.component';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UsersService } from '@services/users.service';
import { HttpClientModule } from '@angular/common/http';
import { ACTION_TYPE } from 'src/app/enums/action-type.enum';
import { TableAction } from '@models/table-action';
import { ConfirmationService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'gico-user-list-page',
  standalone: true,
  imports: [
    CommonModule,
    UsersTableComponent,
    UsersFormComponent,
    HttpClientModule,
    ConfirmDialogModule,
  ],
  providers: [UsersService, ConfirmationService],
  templateUrl: './user-list-page.component.html',
  styleUrls: ['./user-list-page.component.scss'],
})
export class UserListPageComponent implements OnInit {
  public userList: User[] = [];
  public ACTION_TYPE = ACTION_TYPE;

  constructor(
    private readonly userService: UsersService,
    private readonly confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers(): void {
    this.userService
      .getUsers()
      .subscribe((users: User[]) => (this.userList = users));
  }

  public onTableAction({ action, value }: TableAction): void {
    switch (action) {
      case 'delete':
        this.confirmDelete(value);
        break;

      default:
        break;
    }
  }

  private confirmDelete(value: any): void {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Yes',
      rejectLabel: 'No',
      accept: () => this.deleteUser(value),
      reject: () => console.log('no'),
    });
  }

  private deleteUser(value: string) {
    this.userService.deleteUserById(value).subscribe((userId) => {
      //Show toast
      this.getUsers();
    });
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

  private calculateNextId(userList: User[]): string {
    const sortedUsers = userList
      .slice()
      .sort((a, b) => Number(b.id) - Number(a.id));
    return sortedUsers.length > 0 ? String(Number(sortedUsers[0].id) + 1) : '1';
  }
}
