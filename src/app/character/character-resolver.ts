import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { Character } from '../interfaces/character';
import { CharactersService } from '../services/characters.service';
import { inject } from '@angular/core';

export const characterResolver: ResolveFn<Character | undefined> =
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    return inject(CharactersService).getCharacterById(route.params['id']);
};
