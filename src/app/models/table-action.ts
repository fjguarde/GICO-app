import { User } from "./user";

export interface UserTableAction {
  action: 'edit' | 'delete';
  user: User;
}
