import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterComponent implements OnInit {
  public character: Character | null = null;

  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: Data) => {
      this.character = data['character'];
    });
  }
}
