import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-envoyer-colis',
  templateUrl: './envoyer-colis.page.html',
  styleUrls: ['./envoyer-colis.page.scss'],
})
export class EnvoyerColisPage implements OnInit {

  constructor(private location : Location) { }

  myBackButton(){
    this.location.back();
  }

  ngOnInit() {
  }

}
