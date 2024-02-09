import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';

const routes: Routes = [
  { path: "", redirectTo: "/signin", pathMatch: 'full' }, // Redirect to /home for empty path
  { path: "signin", component: SignInComponent, pathMatch: 'full' },
  { path: "signin/createaccount", component:CreateAccountComponent, pathMatch: 'full'},
  { path: "dashboard", component:DashboardComponent, pathMatch: 'full'},
  { path: "**", component:PageNotFoundComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
