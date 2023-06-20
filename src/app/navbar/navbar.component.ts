import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
  constructor(
    private readonly router: Router,
    private readonly authService: AuthService
  ) {}

  public get isAuthenticated(): boolean {
    return this.authService.loggedIn;
  }

  public logOut(): void {
    this.authService.logOut();

    this.router.navigate(['login']);
  }
}
