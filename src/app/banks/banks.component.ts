import { Component, OnInit } from '@angular/core'; //aggiungere OnInit per utilizzare metodo automatico ngOnInit
import { Bank } from '../Bank';
import { BankService } from '../bank.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-banks',
  templateUrl: './banks.component.html',
  styleUrls: ['./banks.component.scss'],
})
export class banksComponent implements OnInit {
  banks: Bank[] = [];
  selectedBank: Bank = this.banks[0];

  constructor(
    private BankService: BankService,
    private messageService: MessageService
  ) {}

  getbanks() {
    this.BankService.getBanks().subscribe((cs) => {
      this.banks = cs;
      console.log(cs);
    });
    console.log()
    
  }

  ngOnInit(): void {
    //questa funzione viene chiamata automaticamente da angular al momento dell'istanza di questo component
    this.getbanks();
    console.log(this.banks);
  }

  onSelect(Bank: Bank): void {
    this.selectedBank = Bank;
    this.messageService.add(`banksComponent: Selected Bank id=${Bank.id}`);
  }
}
