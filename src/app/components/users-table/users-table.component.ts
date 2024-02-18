import { Component, Input } from '@angular/core';
import { TableModule } from 'primeng/table';
import { User } from 'src/app/models/user';
const PRIME_NG_MODULES = [TableModule]
@Component({
  selector: 'gico-users-table',
  standalone: true,
  imports: [PRIME_NG_MODULES],
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent {
  @Input() users: User[] = [];

}
