import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { RoomListComponent } from './room-list/room-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DetailTransaksiComponent } from './detail-transaksi/detail-transaksi.component';
import { CostumerComponent } from './costumer/costumer.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomListComponent,
    LoginComponent,
    RegisterComponent,
    DetailTransaksiComponent,
    CostumerComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule,
    RouterModule.forRoot([
      { path: '', component: RoomListComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
