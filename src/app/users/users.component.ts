import { Component } from '@angular/core';
import { UserServiceService } from '../user.service';
import { MessageService } from '../message.service';
import { User } from '../user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent{
users: any[] = [];
selectedUser: User = this.users[0];

constructor(
  private UserServiceService: UserServiceService,
  private messageService: MessageService
) {}
getusers() {
  this.UserServiceService.getUsers().subscribe((cs) => 
  {
    console.log(cs);
    this.users = cs;
  });
  
}

ngOnInit(): void {
  //questa funzione viene chiamata automaticamente da angular al momento dell'istanza di questo component
  this.getusers();
  console.log(this.users);
}

onSelect(User: User): void {
  this.selectedUser = User;
  this.messageService.add(`usersComponent: Selected User id=${User.id}`);
}
}

