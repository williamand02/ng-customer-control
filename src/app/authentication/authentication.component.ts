import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent {
  public errorMessage = '';

  constructor(
    private authService: AuthenticationService,
    private router: Router,
  ) { }
  login(email: string, senha: string): void {
    this.authService.login(email, senha).subscribe(
      (authenticated) => {
        if (authenticated) {
          const token = 'fake-token-numero-grande-aqui';
          localStorage.setItem('authToken', token);

          this.router.navigate(['/clients']);
        } else {
          this.errorMessage = 'E-mail e/ou senha inválidos.';
        }
      }
    )
  }
}
