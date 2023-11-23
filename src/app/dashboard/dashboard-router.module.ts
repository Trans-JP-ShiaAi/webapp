import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';

const dashboardRoutes: Routes = [
    {
        path: 'homepage',
        component: HomepageComponent
    },

];

@NgModule({
    imports: [RouterModule.forChild(dashboardRoutes)],
    exports: [RouterModule]
})

export class DashboardRouterModule { }