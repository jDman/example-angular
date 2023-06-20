import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = false;

  constructor(
    private readonly localStorageService: LocalStorageService
  ) {}

  isAutheniticated(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 750);
    });
  }

  login(): void {
    this.loggedIn = true;
    this.localStorageService.setItem('login', 'user123');
  }

  logOut(): void {
    this.loggedIn = false;
    this.localStorageService.removeItem('login');
  }
}
