import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mes-discussions',
  templateUrl: './mes-discussions.page.html',
  styleUrls: ['./mes-discussions.page.scss'],
})
export class MesDiscussionsPage implements OnInit {

  items = [
    {},
    {},
    {},
    {},
  ]
  constructor(private location : Location) { }

  myBackButton(){
    this.location.back();
  }

  ngOnInit() {
  }

}
