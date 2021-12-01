import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-colis',
  templateUrl: './gestion-colis.page.html',
  styleUrls: ['./gestion-colis.page.scss'],
})
export class GestionColisPage implements OnInit {

  constructor(private location : Location) { }

  myBackButton(){
    this.location.back();
  }

  ngOnInit() {
  }

}
