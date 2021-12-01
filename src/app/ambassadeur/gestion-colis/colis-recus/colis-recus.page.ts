import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colis-recus',
  templateUrl: './colis-recus.page.html',
  styleUrls: ['./colis-recus.page.scss'],
})
export class ColisRecusPage implements OnInit {

  items =[
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
