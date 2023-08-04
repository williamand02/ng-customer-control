import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, delay, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiUrl = 'http://localhost:3000';
  private isLoggedIn = false;

  constructor(private http: HttpClient) { }


  login(email: string, password: string){
    return this.http.get<any[]>(`${this.apiUrl}/usuarios?username=${email}&password=${password}`)
      .pipe(
        map(users => users.length > 0)
      );
  }

  logout(): void {

    localStorage.removeItem('token');
    this.isLoggedIn = false;
  }

  isLoggedInUser(): boolean {


    return this.isLoggedIn;
  }
}
