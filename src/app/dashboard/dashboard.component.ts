import { Component, OnInit } from '@angular/core';
import { Bank } from '../Bank';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  Banks: Bank[] = [];

  constructor(private BankService: BankService) {}

  ngOnInit(): void {
    this.getBanks();
  }

  getBanks(): void {
    this.BankService
      .getBanks()
      .subscribe((Banks) => (this.Banks = Banks.slice(0, 5)));
  }
}
