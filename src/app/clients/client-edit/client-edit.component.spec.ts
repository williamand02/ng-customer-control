import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientEditComponent } from './client-edit.component';
import { ActivatedRoute, Router } from '@angular/router';
import ClientService from 'src/app/services/client.service';
import { HttpClientModule } from '@angular/common/http';
import { ClientsModule } from '../clients.module';
import { RouterTestingModule } from '@angular/router/testing';
import { Client } from 'src/app/shared/interfaces/client.interface';
import { of } from 'rxjs';

describe('ClientEditComponent', () => {
  let component: ClientEditComponent;
  let fixture: ComponentFixture<ClientEditComponent>;

  let mockClientService: jasmine.SpyObj<ClientService>;

  beforeEach(async () => {
    mockClientService = jasmine.createSpyObj<ClientService>('ClientService', [
      'getClientById',
      'updateClient',
    ]);
    await TestBed.configureTestingModule({
      declarations: [ClientEditComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: new Map([['id', '1']]),
            },
          },
        },
        { provide: ClientService, useValue: mockClientService }
      ],
      imports: [HttpClientModule, ClientsModule, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ClientEditComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load client data on init', async () => {
    const testClient: Client = {
      id: 1,
      name: 'Test Client',
      value: 1000,
      title: 'Mr',
      date: '2023-07-28',
      unidadeFederativa: 'SP',
      isPayed: true,
      documentoIdentificacao: '123456',
    };
    mockClientService.getClientById.and.returnValue(of(testClient));

    component.ngOnInit();

    await fixture.whenStable();

    fixture.detectChanges();

  });
});
