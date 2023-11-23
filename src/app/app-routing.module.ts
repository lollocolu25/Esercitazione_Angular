import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { banksComponent } from './banks/banks.component';
import { UsersComponent } from './users/users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BankDetailComponent } from './bank-detail/bank-detail.component';
import { UserDetailComponent } from './users-detail/users-detail.component';

const routes: Routes = [
  { path: 'Banks', component: banksComponent },
  {path:'Utenti', component: UsersComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: BankDetailComponent },
  {path: 'detail/:id', component:UserDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
