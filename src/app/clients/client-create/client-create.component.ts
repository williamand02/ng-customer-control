import { Component } from '@angular/core';
import { Router } from '@angular/router';
import ClientService from 'src/app/services/client.service';
import { Client } from 'src/app/shared/interfaces/client.interface';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent {
  public newClient: Client = {} as Client;

  constructor(
    private router: Router,
    private clientService: ClientService
  ) { }
  saveClient(): void {
    this.clientService.createClient(this.newClient).subscribe(
      () => {
        this.router.navigate(['/clients']);
      }
    );
  }
}
