import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    constructor(
      private readonly router: Router,
      private readonly authService: AuthService
    ) {}

    login(): void {
      this.authService.login();

      this.router.navigate(['dashboard']);
    }
}
