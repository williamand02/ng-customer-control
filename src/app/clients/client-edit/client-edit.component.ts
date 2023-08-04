import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import ClientService from 'src/app/services/client.service';
import { Client } from 'src/app/shared/interfaces/client.interface';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent {
  client: Client = {} as Client;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clientService: ClientService
  ) { }

  ngOnInit(): void {
    const clientId = this.route.snapshot.paramMap.get('id');
    if (clientId) {
      this.clientService.getClientById(parseInt(clientId, 10)).subscribe(
        (client) => {
          client.date = formatDate(client.date, 'yyyy-MM-dd', 'en');
          this.client = client;
        }
      );
    }
  }

  saveChanges(): void {
    if (this.client) {
      const dateObject = new Date(this.client.date);
      this.client.date = dateObject.toISOString();
      this.clientService.updateClient(this.client).subscribe(
        () => {
          this.router.navigate(['/clients']);
        }
      );
    }
  }
}
