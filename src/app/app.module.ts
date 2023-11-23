import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { banksComponent } from './banks/banks.component';
import { FormsModule } from '@angular/forms';
import { BankDetailComponent } from './bank-detail/bank-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component'; // <-- NgModel lives here
import { RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './users-detail/users-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    banksComponent,
    BankDetailComponent,
    MessagesComponent,
    DashboardComponent,
    UsersComponent,
    UserDetailComponent,    
  ],  
  imports: 
  [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
