import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../shared/interfaces/client.interface';


@Injectable({
  providedIn: 'root'
})
export default class ClientService {
  private apiUrl = 'http://localhost:3000/clientes';

  constructor(private http: HttpClient) { }

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.apiUrl);
  }

  getClientById(clientId: number): Observable<Client> {
    return this.http.get<Client>(`${this.apiUrl}/${clientId}`);
  }


  createClient(client: Client): Observable<Client> {
    return this.http.post<Client>(this.apiUrl, client);
  }

  updateClient(client: Client): Observable<Client> {
    return this.http.put<Client>(`${this.apiUrl}/${client.id}`, client);
  }

  deleteClient(clientId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${clientId}`);
  }
}
