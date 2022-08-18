import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationComponent } from './authorization/authorization.component';
import { AuthGuard } from './config/auth.guard';
import { LayoutsComponent } from './layouts/layouts.component';

const routes: Routes = [
  {
    path: 'login',
    canActivate: [AuthGuard],
    component: AuthorizationComponent,
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'v1',
    component: LayoutsComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./layouts/layouts.module').then((m) => m.LayoutsModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
