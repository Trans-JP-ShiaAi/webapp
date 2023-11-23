
import { loginStart, getProfile } from './user.action';
import { Action, ActionCreatorProps, select, Store } from '@ngrx/store';
import { Injectable } from "@angular/core";
import { throwError } from "rxjs";
import { exhaustMap, map, mergeMap, switchMap, tap } from "rxjs/operators";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as authActions from "./user.action";
import { AuthService } from "src/app/core/service/auth.service";
import { Router } from "@angular/router";
import { of, catchError } from 'rxjs';
import { UserInfo } from 'src/app/core/models/user';
import { LogService } from '@app/core/service/log.service';

// Your code here

@Injectable()

export class AuthEffects {

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
    private logService: LogService,
  ) { }

  signup$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.signupStart),exhaustMap((action) => {
        return this.authService.register(action.UserSignUp).pipe(
          map((res) => {
            this.authService.saveUserToLocalStorage(res)
            this.logService.showSuccess('Registration successful', 'Successfully registered');
            this.router.navigateByUrl('/heroes');
            return authActions.signupSuccess({ UserInfo: res });
          }),
          catchError((error) => {
            this.logService.showError(`Error: ${error}`, 'Error when signing up');
            return of(
              authActions.signupFailure({ error: error?.error?.message })
            );
          })
        )
      }
      )
    )
  )

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.loginStart),exhaustMap((action) => {
        return this.authService.login(action.user).pipe(
          map((response) => {
            this.authService.saveUserToLocalStorage(response)
            this.logService.showSuccess('Login successful', 'Login successful')
            this.router.navigateByUrl('/heroes');
            return authActions.loginSuccess({ UserInfo: response });
          }),
          catchError((error) => {
            this.logService.showError(`${error?.error?.message}`, 'Error login');
            return of(
              authActions.loginFailure({ error: error?.error?.message })
            );
          })
        );
      })
    )
  )

  getProfile$ = createEffect(() =>  
  this.actions$.pipe(
    ofType(authActions.getProfile),exhaustMap(() => {
      const userProfile = JSON.parse(localStorage.getItem('user-profile')!);
      const tokenFromLocalUser = userProfile && userProfile.token;
        if(!tokenFromLocalUser){
          return of(authActions.getProfileError({ error: 'Error getting profile of user' }))
        }
       return this.authService.profile(String(userProfile?.user.id)).pipe(
          map((user) => authActions.getProfileSuccess({ UserInfo: user })),
          catchError((error) => {
            this.logService.showError('Error', 'Error when fetching profile')
            return of(
              authActions.getProfileError({ error: error?.error?.message })
            )
          })
        )
      })
    ))

  updateProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.updateProfile), switchMap((res) => {
        return this.authService.updateProfile(res.id, res.userInfo).pipe(
        map((user) => {
          this.logService.showSuccess('Updating profile successfully', 'updating profile'),
          this.router.navigateByUrl('/heroes')
          return authActions.updateProfileSuccess({ UserInfo: user })
          }
          ),
        catchError((error) => {
          this.logService.showError(`Error updating profile`, 'Error updating profile');
          return of(
          authActions.updateProfileFailed({ error: error?.error?.message })
            )
          })
        )
      }
      )
    )
  )

}