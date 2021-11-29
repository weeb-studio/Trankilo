import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.page.html',
  styleUrls: ['./paiement.page.scss'],
})
export class PaiementPage implements OnInit {

  constructor(private location : Location) { }

  myBackButton(){
    this.location.back();
  }

  ngOnInit() {
  }

}
