import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UserServiceService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-Bank-detail',
  templateUrl: './Users-detail.component.html',
  styleUrls: [ './Users-detail.component.css' ]
})
export class UserDetailComponent implements OnInit {
  User: User = {
    id: "1",
    nome: "gh",
  };

  constructor(
    private route: ActivatedRoute,
    private UserService: UserServiceService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
    })
  }

  getBank(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.UserService.getUser(id)
      .subscribe((User) => console.log(User[0]));
  }

  goBack(): void {
    this.location.back();
  }
}