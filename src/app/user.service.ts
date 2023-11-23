import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; 
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private UsersUrl = 'https://localhost:7166/api/utenti';
  
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  getUsers(): Observable<User[]> {
    
    this.log('fetched Users');
    return this.http.get<User[]>(`${this.UsersUrl}`);
  }

  getUser(id: string | null): Observable<User[]> {
   
    this.log(`fetched User id=${id}`);
    return this.http.get<User[]>(`${this.UsersUrl}alpha/${id}`);
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`UserService: ${message}`);
}
}

