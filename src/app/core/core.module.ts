import { Injectable, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@Injectable({
  providedIn: 'root',
})

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { 
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
      ]
    };
  }
}
