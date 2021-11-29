import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages-details',
  templateUrl: './messages-details.page.html',
  styleUrls: ['./messages-details.page.scss'],
})
export class MessagesDetailsPage implements OnInit {

  constructor(private location : Location) { }

  myBackButton(){
    this.location.back();
  }

  ngOnInit() {
  }

}
