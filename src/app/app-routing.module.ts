import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { ClientListComponent } from './clients/client-list/client-list.component';
import { ClientEditComponent } from './clients/client-edit/client-edit.component';
import { ClientCreateComponent } from './clients/client-create/client-create.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: AuthenticationComponent },
  { path: 'clients', component: ClientListComponent },
  { path: 'clients/edit/:id', component: ClientEditComponent },
  { path: 'clients/create', component: ClientCreateComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
