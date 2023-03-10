import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string = 'https://reqres.in'

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(`${this.url}/api/users?per_page=6&delay=3`).pipe(
      map( (res: any) => res['data'])
    )
  }

  getUserById(id: string){
    return this.http.get(`${this.url}/api/users/${id}`).pipe(
      map( (res: any) => res['data'])
    )
  }
}
