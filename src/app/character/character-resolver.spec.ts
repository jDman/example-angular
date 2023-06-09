import { TestBed } from '@angular/core/testing';

import { characterResolver } from './character-resolver';

describe('characterResolver', () => {
  let resolver = characterResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
