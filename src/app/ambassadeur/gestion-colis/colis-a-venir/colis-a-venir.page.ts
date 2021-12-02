import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colis-a-venir',
  templateUrl: './colis-a-venir.page.html',
  styleUrls: ['./colis-a-venir.page.scss'],
})
export class ColisAVenirPage implements OnInit {

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