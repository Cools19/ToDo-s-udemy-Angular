import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './Components/error/error.component';
import { ListTodosComponent } from './Components/list-todos/list-todos.component';
import { LoginComponent } from './Components/login/login.component';
import { LogoutComponent } from './Components/logout/logout.component';
import { WelcomeComponent } from './Components/welcome/welcome.component';
import { RouteGuardService } from './Services/route-guard.service';

const routes: Routes = [
  {path:'login',component:LoginComponent},// canActivate,RouteGuardService
  {path:'',component:LoginComponent},
  {path:'welcome/:name',component:WelcomeComponent, canActivate:[RouteGuardService]},
  {path:'todos',component:ListTodosComponent,canActivate:[RouteGuardService]},
  {path:'logout',component:LogoutComponent,canActivate:[RouteGuardService]},
  
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
