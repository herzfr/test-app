import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormAppComponent } from '../content/form/form.component';
import { HomeComponent } from '../content/home/home.component';
import { ParentComponent } from '../content/parent/parent.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'form', component: FormAppComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutsRoutingModule {}
