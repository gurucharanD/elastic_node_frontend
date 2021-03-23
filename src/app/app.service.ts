import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AppService {

  constructor(private http: HttpClient) { }

  public fetchUsersData() {
    return this.http.post('http://localhost:5502/users/fetchall', {})
  }

  public fetchParticularUser(user) {
    return this.http.post('http://localhost:5502/users/search', user)
  }

  public addUser(user) {
    return this.http.post('http://localhost:5502/users/add', user)
  }

}
