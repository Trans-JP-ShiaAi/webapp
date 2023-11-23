import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CtiToastComponent } from './component/cti-toast/cti-toast.component';

@NgModule({
  imports: [CommonModule,],
  declarations: [
    CtiToastComponent
  ],
  exports: []
})

export class SharedModule{}
