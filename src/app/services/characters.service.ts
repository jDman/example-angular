import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  private characters: Character[] = [
    { id: 1, name: 'Edmund Honda', weight: '302lbs', height: '6\'1', likes: ['Baths'], dislikes: ['Indecisiveness'] },
    { id: 2, name: 'Cammy White', weight: '134lbs', height: '5\'5', likes: ['Cats'], dislikes: ['Everything (if she\'s grumpy)'] },
    { id: 3, name: 'Ken Masters', weight: '183lbs', height: '5\'9',likes: ['Family'], dislikes: ['Pointless meetings'] }
  ];
  private characters$ = new BehaviorSubject<Character[]>(this.characters);

  public get characterList$(): Observable<Character[]> {
    return this.characters$.asObservable();
  }

  constructor(private readonly localStorageService: LocalStorageService) {}

  public getCharacterById(id: string): Observable<Character | undefined> {
    return this.characterList$.pipe(
      map(characters => {
        return characters.find((character: Character) => +character.id === +id);
      })
    )
  }

  public updateCharacters(character: Character): void {
    const characterIndex = this.characters.findIndex((char: Character) =>
      char.id === character.id);

    if (characterIndex === -1) {
      this.characters.push(character);
      this.characters$.next(this.characters);
    }
  }

  public getCharactersFromStorage(): Character[] {
    return JSON.parse(this.localStorageService.getItem('characters'));
  }
}
