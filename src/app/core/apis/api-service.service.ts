import { Inject, Injectable, Injector } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { BaseHTTPService } from './base-http.service';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { API_URL } from '../service/keys';

@Injectable()
export class ApiServiceService extends BaseHTTPService {
  override status$ = new BehaviorSubject<{ isSaving?: boolean; isLoading?: boolean }>({
    isSaving: false,
    isLoading: false,
  });


  constructor(
    injector: Injector,
    @Inject(API_URL) private url: string,
  ) {
    super(injector);
  }


  private _getUrl(parts: string[]) {
    parts = [this.url, 'api', 'v1.0', ...parts];
    return parts.join('/');
  }
}
