import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Bank } from '../Bank';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-Bank-detail',
  templateUrl: './Bank-detail.component.html',
  styleUrls: [ './Bank-detail.component.css' ]
})
export class BankDetailComponent implements OnInit {
  Bank: Bank = {
    id: "",
    nome: "",
  };

  constructor(
    private route: ActivatedRoute,
    private BankService: BankService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getBank();
    this.route.params.subscribe(params => {
      this.getBank();
    })
  }

  getBank(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.BankService.getBank(id)
      .subscribe((Bank) => this.Bank = Bank[0]);
  }

  goBack(): void {
    this.location.back();
  }
}
