import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable()
export class AuthService {
  constructor(public jwtHelper: JwtHelperService) {}
  public isAuthenticated(): boolean {
    const userProfile = JSON.parse(localStorage.getItem('user-profile')!);
    const tokenFromLocalUser = userProfile && userProfile.token;
    return !this.jwtHelper.isTokenExpired(tokenFromLocalUser);
  }
}