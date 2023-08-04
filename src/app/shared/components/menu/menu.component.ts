import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class AppMenuComponent {
  isLoginPage: boolean = false;

  constructor(private router: Router) {}

  logoff(): void {
    localStorage.removeItem('authToken');
    this.isLoginPage = true;
    this.router.navigate(['/login']);
  }
}
