import { Routes } from '@angular/router';
import { UserListPageComponent } from './pages/user-list-page/user-list-page.component';

export const routes: Routes = [
    {path: '', component: UserListPageComponent},
    { path: "**", 
      loadComponent: () => import('./pages/not-found-page/not-found-page.component')
        .then(c => c.NotFoundPageComponent)
    }
];
