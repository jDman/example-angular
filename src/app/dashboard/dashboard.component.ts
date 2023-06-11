import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CharactersService } from '../services/characters.service';
import { take } from 'rxjs';
import { Character } from '../interfaces/character';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {
  public characters: Character[] = [];

  constructor(private readonly characterService: CharactersService) {}

  ngOnInit(): void {
    this.characterService.getCharacters().pipe(
      take(1),
    ).subscribe((characters: Character[]) =>
      this.characters = characters.sort((characterA, characterB) => {
        const characterAnameList = characterA.name.split(' ');
        const characterAlastName = characterAnameList[characterAnameList.length - 1];
        const characterBnameList = characterB.name.split(' ');
        const characterBlastName = characterBnameList[characterBnameList.length - 1];

        return characterAlastName.localeCompare(characterBlastName);
      }));
  }
}
