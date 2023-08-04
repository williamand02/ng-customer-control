import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { PaginatedTableComponent } from './paginated-table.component';
import { Client } from '../../interfaces/client.interface';

fdescribe('PaginatedTableComponent', () => {
  let component: PaginatedTableComponent;
  let fixture: ComponentFixture<PaginatedTableComponent>;
  let data: Client[] = [];
  let tableColumns: string[] = [];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginatedTableComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(PaginatedTableComponent);
    component = fixture.componentInstance;

    data = [
      {
        "id": 1,
        "name": "Cinthya da Silva",
        "documentoIdentificacao": "9991111",
        "value": 207.36,
        "title": "Professor",
        "date": "2021-01-01T00:00:00.000Z",
        "unidadeFederativa": "DF",
        "isPayed": true
      },
      {
        "id": 2,
        "name": "João Maria de Oliveira",
        "documentoIdentificacao": "9992222",
        "value": 100.00,
        "title": "Desenvolvedor",
        "date": "2021-02-01T00:00:00.000Z",
        "unidadeFederativa": "GO",
        "isPayed": false
      },
      {
        "id": 3,
        "name": "Thiago Nogueira",
        "documentoIdentificacao": "22233344455",
        "value": 150.00,
        "title": "Assistant",
        "date": "2020-02-01T00:00:00.000Z",
        "unidadeFederativa": "GO",
        "isPayed": true
      },
      {
        "id": 4,
        "name": "Carlos Nogueira",
        "documentoIdentificacao": "57575754",
        "value": 450.00,
        "title": "Assistant",
        "date": "2021-02-01T00:00:00.000Z",
        "unidadeFederativa": "GO",
        "isPayed": true
      },
      {
        "id": 5,
        "name": "Carlos Cezar",
        "documentoIdentificacao": "7257424",
        "value": 780.00,
        "title": "Assistant",
        "date": "2000-02-01T00:00:00.000Z",
        "unidadeFederativa": "SP",
        "isPayed": false
      },
      {
        "id": 6,
        "name": "Matheus Oliveira",
        "documentoIdentificacao": "87141",
        "value": 100.00,
        "title": "Project Manager",
        "date": "2001-02-01T00:00:00.000Z",
        "unidadeFederativa": "SP",
        "isPayed": true
      },
      {
        "id": 7,
        "name": "Matheus dos Santos",
        "documentoIdentificacao": "897541",
        "value": 199.00,
        "title": "Project Manager",
        "date": "2001-02-01T00:00:00.000Z",
        "unidadeFederativa": "ES",
        "isPayed": false
      },
      {
        "id": 8,
        "name": "Judas dos Santos",
        "documentoIdentificacao": "959996",
        "value": 199.10,
        "title": "Project Manager",
        "date": "2011-02-01T00:00:00.000Z",
        "unidadeFederativa": "AC",
        "isPayed": true
      },
      {
        "id": 9,
        "name": "Matheus Lima",
        "documentoIdentificacao": "996333",
        "value": 299.10,
        "title": "Web Developer",
        "date": "2010-02-01T00:00:00.000Z",
        "unidadeFederativa": "AC",
        "isPayed": false
      },
      {
        "id": 10,
        "name": "Leticia Lima",
        "documentoIdentificacao": "332144",
        "value": 399.10,
        "title": "Web Developer",
        "date": "2011-02-01T00:00:00.000Z",
        "unidadeFederativa": "TO",
        "isPayed": true
      },
      {
        "id": 11,
        "name": "Leticia Borges",
        "documentoIdentificacao": "5813213512",
        "value": 3330.10,
        "title": "Developer",
        "date": "2010-02-01T00:00:00.000Z",
        "unidadeFederativa": "TO",
        "isPayed": true
      },
      {
        "id": 12,
        "name": "Lara Borges",
        "documentoIdentificacao": "22555",
        "value": 331.10,
        "title": "Developer",
        "date": "2011-09-01T00:00:00.000Z",
        "unidadeFederativa": "TO",
        "isPayed": false
      },

    ];
    tableColumns = ['name', 'value', 'title', 'date', 'unidadeFederativa', 'isPayed'];

    component.data = data;
    component.columns = tableColumns;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render correct table body rows', () => {

    component.updateDisplayedData()
    fixture.detectChanges();


    const tableBodyRows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(tableBodyRows.length).toEqual(component.displayedData.length);

    for (let i = 0; i < component.displayedData.length; i++) {
      debugger;
      const row = tableBodyRows[i].queryAll(By.css('td'));
      expect(row.length).toEqual(tableColumns.length);

      for (let j = 0; j < tableColumns.length; j++) {
        const columnName = tableColumns[j];
        expect(row[j].nativeElement.textContent).toContain(data[i][columnName as unknown as keyof Client]);
      }
    }
  });

  it('should disable the "Previous" button when on the first page', () => {
    const previousButton = fixture.debugElement.query(By.css('.pagination button:first-child'));
    expect(previousButton.nativeElement.disabled).toBeTrue();
  });

  it('should disable the "Next" button when on the last page', () => {
    const nextButton = fixture.debugElement.query(By.css('.pagination button:last-child'));
    const totalPages = component.totalPages();
    for (let i = 1; i < totalPages; i++) {
      nextButton.nativeElement.click();
      fixture.detectChanges();
    }
    expect(nextButton.nativeElement.disabled).toBeTrue();
  });


it('should display the correct number of rows according to itemsPerPage', () => {
  const itemsPerPage = 6;
  const testData: Client[] = data.slice(0,itemsPerPage);

  component.data = testData;
  component.itemsPerPage = itemsPerPage;

  component.updateDisplayedData();
  fixture.detectChanges();

  const tableBodyRows = fixture.debugElement.queryAll(By.css('tbody tr'));

  expect(tableBodyRows.length).toEqual(itemsPerPage);
});
it('should return 0 when data is an empty array', () => {
  component.data = [];
  component.itemsPerPage = 10;
  const totalPages = component.totalPages();
  expect(totalPages).toBe(0);
});
it('should return 0 when data not an array', () => {
  component.data = null as unknown as any[];
  component.itemsPerPage = 10;
  const totalPages = component.totalPages();
  expect(totalPages).toBe(0);
});
it('should return 1 when data has only one item', () => {
  component.data = [{} as Client];
  component.itemsPerPage = 10;
  const totalPages = component.totalPages();
  expect(totalPages).toBe(1);
});

it('should return the correct number of pages when data has multiple items', () => {
  component.data = [{} as Client, {} as Client, {} as Client, {} as Client, {} as Client];
  component.itemsPerPage = 2;
  const totalPages = component.totalPages();
  expect(totalPages).toBe(3);
});

});
