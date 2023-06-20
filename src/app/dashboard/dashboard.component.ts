import { ChangeDetectionStrategy, Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { CharactersService } from '../services/characters.service';
import { Subject, map, takeUntil } from 'rxjs';
import { Character } from '../interfaces/character';
import { LocalStorageService } from '../services/local-storage.service';
import random from 'random'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit, OnDestroy {
  public characters: Character[] = [];

  private destroyed$ = new Subject<void>(); 

  constructor(
    private readonly characterService: CharactersService,
    private readonly localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.characterService.characterList$.pipe(
      takeUntil(this.destroyed$),
    ).subscribe((characters: Character[]) =>
      this.characters = characters.sort((characterA, characterB) => {
        const characterAnameList = characterA.name.split(' ');
        const characterAlastName = characterAnameList[characterAnameList.length - 1];
        const characterBnameList = characterB.name.split(' ');
        const characterBlastName = characterBnameList[characterBnameList.length - 1];

        return characterAlastName.localeCompare(characterBlastName);
      }));
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
  
  public addNewCharacter(character: Omit<Character, 'id'>): void {
    const newCharacter: Character = {
      ...character,
      id: random.int(this.characters.length + 1, this.characters.length + 2)
    };

    const storedCharacters = this.characterService.getCharactersFromStorage();
    storedCharacters.push(newCharacter);

    this.localStorageService.setItem('characters', JSON.stringify([...new Set(storedCharacters)]));

    this.characterService.updateCharacters(newCharacter);
  }
}
