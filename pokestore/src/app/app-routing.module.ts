import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { profile } from 'console';
import { ForbiddenComponent } from './pages/error/forbidden/forbidden.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { TestComponent } from './pages/pokemon/test/test.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { RoleGuard } from './shared/guards/role.guard';

const routes: Routes = [  
  { path: '', redirectTo: 'pokemon', pathMatch: 'full' },
  { path: 'pokemon' , component: TestComponent, canActivate:[AuthGuard]},
  { path: 'login' , component: LoginComponent },
  { path: 'sign-up' , component: SignUpComponent },
  { path: 'profile/:user', component: ProfileComponent, canActivate: [AuthGuard]},
  //{ path: 'profile/:user', component: ProfileComponent },
  { path: 'forbidden', component: ForbiddenComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }