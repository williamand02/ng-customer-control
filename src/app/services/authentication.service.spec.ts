import { TestBed } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';
import { HttpClientModule } from '@angular/common/http';

describe('AuthenticationService', () => {
  let service: AuthenticationService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule]
    }).compileComponents();


    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
