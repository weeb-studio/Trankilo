import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mes-expeditions',
  templateUrl: './mes-expeditions.page.html',
  styleUrls: ['./mes-expeditions.page.scss'],
})
export class MesExpeditionsPage implements OnInit {

  constructor(private location : Location) { }

  myBackButton(){
    this.location.back();
  }

  ngOnInit() {
  }

}
