import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TableAction } from '@models/table-action';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { User } from 'src/app/models/user';
const PRIME_NG_MODULES = [TableModule, TooltipModule, ButtonModule];
@Component({
  selector: 'gico-users-table',
  standalone: true,
  imports: [PRIME_NG_MODULES],
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
})
export class UsersTableComponent {
  @Input() users: User[] = [];
  @Output() buttonAction = new EventEmitter<TableAction>();
}
