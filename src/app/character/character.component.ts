import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character';
import { ActivatedRoute, Data } from '@angular/router';
import { take } from 'rxjs';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  public character: Character | null = null;

  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.pipe(take(1)).subscribe((data: Data) => {
      this.character = data['character'];
    });
  }
}
