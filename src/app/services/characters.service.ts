import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  private characters: Character[] = [
    { id: 1, name: 'Edmund Honda', weight: '302lbs', height: '6\'1', likes: ['Baths'], dislikes: ['Indecisiveness'] },
    { id: 2, name: 'Cammy White', weight: '134lbs', height: '5\'5', likes: ['Cats'], dislikes: ['Everything (if she\'s grumpy)'] },
    { id: 3, name: 'Ken Masters', weight: '183lbs', height: '5\'9',likes: ['Family'], dislikes: ['Pointless meetings'] }
  ];

  getCharacters(): Observable<Character[]> {
    return of(this.characters);
  }

  getCharacterById(id: string): Character | undefined {
    return this.characters.find((character: Character) => +character.id === +id);
  }
}
