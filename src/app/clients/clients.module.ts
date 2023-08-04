import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientCreateComponent } from './client-create/client-create.component';
import { PaginatedTableComponent } from '../shared/components/paginated-table/paginated-table.component';
import { ClientEditComponent } from './client-edit/client-edit.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ClientListComponent,
    ClientCreateComponent,
    PaginatedTableComponent,
    ClientEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ClientsModule { }
