import { Injectable } from '@angular/core';
import { Bank } from './Bank';
import { Observable, of } from 'rxjs'; //bisogna aggiungere of
import { MessageService } from './message.service';
import { banksComponent } from './banks/banks.component';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BankService {
  private BanksUrl = 'https://localhost:7166/api/Banche';
  
  
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  getBanks(): Observable<Bank[]> {
    
    this.log('fetched Banks');
    return this.http.get<Bank[]>(`${this.BanksUrl}`);
  }

  getBank(id: string | null): Observable<Bank[]> {
   
    this.log(`fetched Bank id=${id}`);
    return this.http.get<Bank[]>(`${this.BanksUrl}alpha/${id}`);
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`BankService: ${message}`);
  }
}
