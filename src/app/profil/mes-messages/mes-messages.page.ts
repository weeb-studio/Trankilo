import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mes-messages',
  templateUrl: './mes-messages.page.html',
  styleUrls: ['./mes-messages.page.scss'],
})
export class MesMessagesPage implements OnInit {

  constructor(private location : Location) { }

  myBackButton(){
    this.location.back();
  }

  ngOnInit() {
  }

}
