import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sab-app-routing',
  template: '<router-outlet></router-outlet>',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppRoutingComponent {
  // This is proxy for lazyload module in named child router-outlet
  // https://github.com/angular/angular/issues/12842#issuecomment-270836368
}