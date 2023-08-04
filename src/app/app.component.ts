import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public authToken = false;

  constructor(private router: Router) { }
  local:any;
  ngOnInit(): void {
    this.local = localStorage.getItem('authToken');
    this.authToken = !!localStorage.getItem('authToken');
  }
}
