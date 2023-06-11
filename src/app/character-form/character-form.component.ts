import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-character-form',
  templateUrl: './character-form.component.html',
  styleUrls: ['./character-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterFormComponent implements OnInit {
  public characterForm!: FormGroup;

  constructor(private readonly fb: FormBuilder) {}

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
    console.log(this.characterForm.value);
    this.characterForm.reset();
  }
}
