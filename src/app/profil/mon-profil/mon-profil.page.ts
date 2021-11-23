import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mon-profil',
  templateUrl: './mon-profil.page.html',
  styleUrls: ['./mon-profil.page.scss'],
})
export class MonProfilPage implements OnInit {

  constructor(private location : Location) { }

  ngOnInit() {
  }

  myBackButton(){
    this.location.back();
  }

}
