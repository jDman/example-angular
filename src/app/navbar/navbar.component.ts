import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
  @Input() isAuthenticated: boolean = false;

  @Output() loggedOut = new EventEmitter<void>();

  public logOut(): void {
    this.loggedOut.emit();
  }
}
