import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Toast } from 'ngx-toastr';

@Component({
  selector: 'sab-cti-toast',
  templateUrl: './cti-toast.component.html',
  styleUrls: ['./cti-toast.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CtiToastComponent extends Toast implements OnInit {
  ngOnInit(): void {}
}