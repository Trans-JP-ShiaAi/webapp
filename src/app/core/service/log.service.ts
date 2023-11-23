import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor(
    private toastr: ToastrService
  ) { }

  showSuccess(message: string, title: string) {
    this.toastr.success(`${title}`, ` ${message}`);
  }
  showInfo(message: string, title: string) {
    this.toastr.info(`${title}`, ` ${message}`)
  }
  showError(message: string, title: string) {
    this.toastr.error(`${title}`, ` ${message}`);
  }
}
