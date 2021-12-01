import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empty-recus',
  templateUrl: './empty-recus.page.html',
  styleUrls: ['./empty-recus.page.scss'],
})
export class EmptyRecusPage implements OnInit {

  constructor(private location : Location) { }

  myBackButton(){
    this.location.back();
  }

  ngOnInit() {
  }

}
