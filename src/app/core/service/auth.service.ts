
import { User, UserSignUp, UserInfo, UserModel } from '../models/user';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, Subject , throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// service-in-service scenario
import { BehaviorSubject } from 'rxjs';

import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  userProfile: BehaviorSubject<UserInfo> = new BehaviorSubject<UserInfo>({
    user: {
      email: '',
      firstName: '',
      id: 0,
      lastName: '',
      gender: 'female',
    } ,
    token: ''
  })

  private userUrl = 'http://localhost:3030/api/v1/users/'
  constructor(
    private http: HttpClient
    ) { }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  }
  
  login(user: User) {
    return this.http.post<UserInfo>(`${this.userUrl}login`, user, { withCredentials: true })
  }

  profile(idUser: string): Observable<UserInfo>{
    return this.http.get<UserInfo>(`${this.userUrl}profile/${idUser}`)
  }

  register(info: UserSignUp) {
    return this.http.post<UserInfo>(`${this.userUrl}register`,info , {withCredentials : true})
  }
  
  updateProfile(id: string , user: UserModel): Observable<UserInfo> {
    return this.http.patch<UserInfo>(`${this.userUrl}profile/${id}`,user)
  }

 async saveUserToLocalStorage(user: UserInfo) {
    this.userProfile.next(user)
    localStorage.setItem('user-profile', JSON.stringify(user));
  }

 loadUserFromLocalStorage() : UserInfo {
      let fromLocalStorage  = localStorage.getItem('user-profile')
      if(fromLocalStorage){
        let UserInfo = JSON.parse(fromLocalStorage);
        this.userProfile.next(UserInfo)
      }
    
    return this.userProfile.value
 }

}





