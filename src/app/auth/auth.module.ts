import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ResetPassowrdComponent } from './reset-passowrd/reset-passowrd.component';
import { SharedModule } from '../shared/shared.module';

const routes:Routes = [
  { path:'signin', component: SigninComponent, data: {title: 'Sign_in'} },
  { path:'signup', component: SignupComponent, data: {title: 'Sign_up'} },
  { path:'reset-password', component: ResetPassowrdComponent, data: {title: 'Reset password'} }
]

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule],
  declarations: [SigninComponent, SignupComponent, ResetPassowrdComponent]
})
export class AuthModule { }
