import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { DashboardRouterModule } from './dashboard-router.module';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [
    HomepageComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    DashboardRouterModule
  ]
})
export class DashboardModule { }
