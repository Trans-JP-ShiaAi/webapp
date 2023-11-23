import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ConfigService } from '../service/config.service';


@Injectable()
export class BaseHTTPService {
  status$ = new BehaviorSubject<{ isSaving?: boolean; isLoading?: boolean }>({
    isSaving: false,
    isLoading: false
  });

  http: HttpClient;
  configService: ConfigService;

  constructor(
    private injector: Injector
  ) {
    this.http = this.injector.get(HttpClient);
    this.configService = this.injector.get(ConfigService);
  }

  _GET<T>(
    url: string,
    params?: { [key: string]: any },
    guestMode = false
  ): Observable<T> {
    params = params || {};
    this.status$.next({ isLoading: true });

    if (guestMode) {
      params.guestMode = true;
    }

    return this.http.get<T>(url, { params })
      .pipe(
        tap(() => this.status$.next({ isSaving: false }))
      );
  }

  _POST<T>(
    url: string,
    data?: { [key: string]: any },
    params?: { [key: string]: any }
  ): Observable<T> {
    this.status$.next({ isSaving: true });
    params = params || {};
    data = data || {};

    return this.http.post<T>(url, JSON.stringify(data), { params })
      .pipe(
        tap(() => this.status$.next({ isSaving: false }))
      );
  }

  _PUT<T>(
    url: string,
    data?: { [key: string]: any },
    params?: { [key: string]: any }
  ): Observable<T> {
    this.status$.next({ isSaving: true });
    params = params || {};
    data = data || {};

    return this.http.put<T>(url, JSON.stringify(data), { params })
      .pipe(
        tap(() => this.status$.next({ isSaving: false }))
      );
  }

  _DELETE<T>(
    url: string,
    params?: { [key: string]: any }
  ): Observable<T> {
    this.status$.next({ isSaving: true });
    params = params || {};

    return this.http.delete<T>(url, { params })
      .pipe(
        tap(() => this.status$.next({ isSaving: false }))
      );
  }

  _PATCH<T>(
    url: string,
    data?: { [key: string]: any },
    params?: { [key: string]: any }
  ): Observable<T> {
    this.status$.next({ isSaving: true });
    params = params || {};
    data = data || {};

    return this.http.patch<T>(url, JSON.stringify(data), { params })
      .pipe(
        tap(() => this.status$.next({ isSaving: false }))
      );
  }
}