import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  public getItem(key: string): string {
    const item = localStorage.getItem(key);
    return item ? item : '[]';
  }

  public setItem(key: string, data: string): void {
    localStorage.setItem(key, data);
  }

  public removeItem(key: string): void {
    localStorage.removeItem(key);
  }
}
