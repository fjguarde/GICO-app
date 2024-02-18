import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path: '', component: AppComponent},
    {  path: 'users', 
      loadComponent: () => import('./pages/user-list-page/user-list-page.component').then((c) => c.UserListPageComponent) 
    },
];
