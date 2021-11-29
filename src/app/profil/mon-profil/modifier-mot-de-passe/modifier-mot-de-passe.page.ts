import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modifier-mot-de-passe',
  templateUrl: './modifier-mot-de-passe.page.html',
  styleUrls: ['./modifier-mot-de-passe.page.scss'],
})
export class ModifierMotDePassePage implements OnInit {

  constructor(private location : Location) {}

  myBackButton(){
    this.location.back();
  }

  ngOnInit() {
  }

}
