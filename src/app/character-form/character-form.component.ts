import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Character } from '../interfaces/character';

@Component({
  selector: 'app-character-form',
  templateUrl: './character-form.component.html',
  styleUrls: ['./character-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterFormComponent implements OnInit {
  @Output() characterFormSubmitted = new EventEmitter<Omit<Character, 'id'>>();

  public characterForm!: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.characterForm = this.fb.group({
      'characterName': new FormControl(null, Validators.required),
      'characterHeight': new FormControl(null, Validators.required),
      'characterWeight': new FormControl(null, Validators.required),
      'characterLikes': new FormArray([]),
      'characterDislikes': new FormArray([])
    });
  }

  public addLike(): void {
    const control = new FormControl(null, [Validators.required, Validators.minLength(3)]);
    (<FormArray>this.characterForm.get('characterLikes')).push(control);
  }

  public removeLike(index: number): void {
    (<FormArray>this.characterForm.get('characterLikes')).removeAt(index);
  }

  public addDislike(): void {
    const control = new FormControl(null, [Validators.required, Validators.minLength(3)]);
    (<FormArray>this.characterForm.get('characterDislikes')).push(control);
  }

  public removeDislike(index: number): void {
    (<FormArray>this.characterForm.get('characterDislikes')).removeAt(index);
  }

  public getLikeControls() {
    return (<FormArray>this.characterForm.get('characterLikes')).controls;
  }

  public getDislikeControls() {
    return (<FormArray>this.characterForm.get('characterDislikes')).controls;
  }

  public submitForm(): void {
    const characterFormValue = this.characterForm.value;
    const newCharacter = {
      name: characterFormValue.characterName,
      height: characterFormValue.characterHeight,
      weight: characterFormValue.characterWeight,
      likes: characterFormValue.characterLikes,
      dislikes: characterFormValue.characterDislikes
    }
    
    this.characterFormSubmitted.emit(newCharacter);
    this.characterForm.reset();
  }
}
