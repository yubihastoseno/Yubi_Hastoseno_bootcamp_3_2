import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Rx";

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class daftarKamarComponent implements OnInit {

  constructor(private http: Http) { }

  ngOnInit() {
  }
  daftarKamar: object[] = [{ 'nomor': '101', 'kosong': true, 'sewa': false }, { 'nomor': '102', 'kosong': true, 'sewa': false }, { 'nomor': '103', 'kosong': true, 'sewa': false }];

  GetRoom(): object[] {
    var kosong: object[] = [];
    for (var i = 0; i < this.daftarKamar.length; i++) {
      var room = this.daftarKamar[i];
      if (room["kosong"] == true && room["sewa"] == false) {
        kosong.push(room);
      }
    }
    return kosong;
  }

  Book(id): void {
    for (var i = 0; i < this.daftarKamar.length; i++) {
      if (this.daftarKamar[i]['nomor'] == id) {
        this.daftarKamar[i]['kosong'] = false;
        break;
      }
    }
  }
}
