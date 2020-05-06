import { TestBed } from '@angular/core/testing';

import { FirebaseFirestoreService } from './firebase-firestore.service';

describe('FirebaseFirestoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirebaseFirestoreService = TestBed.get(FirebaseFirestoreService);
    expect(service).toBeTruthy();
  });
});
