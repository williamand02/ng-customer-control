import { Component } from '@angular/core';
import { Router } from '@angular/router';
import ClientService from 'src/app/services/client.service';
import { Client } from 'src/app/shared/interfaces/client.interface';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent {
  clients: Client[] = [];
  tableColumns: string[] = ['name', 'title', 'date'];

  constructor(
    private clientService: ClientService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getClients();
  }
  getClients(): void {
    this.clientService.getClients().subscribe(
      (clients) => {
        this.clients = clients
      }
    );
  }

  public onRowClicked(dados: any): void {

  }
  public editClient(client: Client): void {
    this.router.navigate(['/clients/edit', client.id]);
  }
  public deleteClient(client: Client): void {
    const confirmation = confirm(`Are you sure you want to delete the client "${client.name}"?`);
    if (confirmation) {
      this.clientService.deleteClient(client.id).subscribe(
        () => {
          this.clients = this.clients.filter((c) => c.id !== client.id);
        }
      );
    }
  }
  goToCreateClient(): void {
    this.router.navigate(['/clients/create']);
  }
}
