import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empty-a-venir',
  templateUrl: './empty-a-venir.page.html',
  styleUrls: ['./empty-a-venir.page.scss'],
})
export class EmptyAVenirPage implements OnInit {

  constructor(private location : Location) { }

  myBackbutton(){
    this.location.back();
  }

  ngOnInit() {
  }

}
