import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { FormsModule } from '@angular/forms';
import { AuthenticationService } from './services/authentication.service';
import { ClientsModule } from './clients/clients.module';
import { AppMenuComponent } from './shared/components/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    AppMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ClientsModule
  ],
  providers: [
    AuthenticationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
