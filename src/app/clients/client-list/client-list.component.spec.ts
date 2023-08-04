import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientListComponent } from './client-list.component';
import ClientService from 'src/app/services/client.service';
import { HttpClientModule } from '@angular/common/http';
import { ClientsModule } from '../clients.module';

describe('ClientListComponent', () => {
  let component: ClientListComponent;
  let fixture: ComponentFixture<ClientListComponent>;
  let clientService: ClientService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientListComponent],
      providers: [ClientService],
      imports: [HttpClientModule,ClientsModule],


    })
      .compileComponents();

    fixture = TestBed.createComponent(ClientListComponent);
    component = fixture.componentInstance;
    clientService = TestBed.inject(ClientService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
