import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transporter-colis',
  templateUrl: './transporter-colis.page.html',
  styleUrls: ['./transporter-colis.page.scss'],
})
export class TransporterColisPage implements OnInit {

  constructor(private location : Location) { }

  myBackButton(){
    this.location.back();
  }

  ngOnInit() {
  }

}
