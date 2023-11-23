import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { ToastrModule } from 'ngx-toastr';
import { AuthModule } from './auth/auth.module';
import { CtiToastComponent } from './shared/component/cti-toast/cti-toast.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    RouterModule,
    SharedModule,
    BrowserModule,
    AuthModule,
    BrowserAnimationsModule,
    CoreModule.forRoot(),
    ToastrModule.forRoot({
      preventDuplicates: true,
      toastClass: 'cti-toast toast-with-icon',
      progressBar: true,
      toastComponent: CtiToastComponent,
      positionClass: 'toast-bottom-left',
      tapToDismiss: false,
      timeOut: 5000,
      iconClasses: {
        error: 'cti-toast-danger',
        info: 'cti-toast-info',
        success: 'cti-toast-success',
        warning: 'cti-toast-warning',
      }
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
