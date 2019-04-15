import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { LoginComponent } from  './login/login.component';
import { RegisterComponent } from  './register/register.component';
import { ForgotPasswordComponent } from  './forgot-password/forgot-password.component';
import { VerifyEmailComponent } from  './verify-email/verify-email.component';

const routes: Routes = [ {
  path:  'user',  
  
  children: [          
      { path:  'login',component:  LoginComponent},
      { path:  'register', component:  RegisterComponent },
      { path:  'forgot-password', component:  ForgotPasswordComponent },
      { path:  'verify-email', component:  VerifyEmailComponent }
  ]
  }];

@NgModule({
  declarations: [LoginComponent, RegisterComponent,ForgotPasswordComponent,VerifyEmailComponent],
  imports: [RouterModule.forChild(routes)],
})
export class UserRoutingModule { }
