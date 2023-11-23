import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthRouterModule } from './auth-router.module';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  imports: [
    AuthRouterModule,
    SharedModule
  ],
  exports: [
    LoginComponent,
    SignupComponent
  ]
})
export class AuthModule { }
