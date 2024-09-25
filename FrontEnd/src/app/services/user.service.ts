import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private myApiURL:string = 'http://localhost:3001/';
  private myEndpoint:string = 'api/users';

  constructor(private http:HttpClient) { }

  signIn(user:User):Observable<any>{
    return this.http.post(`${this.myApiURL}${this.myEndpoint}`,user);
  }

  logIn(user:User):Observable<string>{
    return this.http.post<string>(`${this.myApiURL}${this.myEndpoint}/login`,user);
  }
}
