import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private readonly http: HttpClient) { }


  public getUsers(filters?: any): Observable<User[]> {
    return this.http.get<User[]>(`${environment.apiUrl}/users`, {
      params: { ...filters }
    })
  }

  public getUserById(userId: string): Observable<User> {
    return this.http.get<User>(`${environment.apiUrl}/users/${userId}`)
  }

  public postUser(user: User): Observable<number> {
    return this.http.post<number>(`${environment.apiUrl}/users`, user)
  }
}
