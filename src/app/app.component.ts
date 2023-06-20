import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  public get isAuthenticated(): boolean {
    return this.authService.loggedIn;
  }

  public logOut(): void {
    this.authService.logOut();

    this.router.navigate(['login']);
  }
}
