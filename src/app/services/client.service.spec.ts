import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';


import ClientService from './client.service';

describe('ClientService', () => {
  let service: ClientService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],

    })
      .compileComponents();

    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
