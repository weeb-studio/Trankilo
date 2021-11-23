import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mes-trajets',
  templateUrl: './mes-trajets.page.html',
  styleUrls: ['./mes-trajets.page.scss'],
})
export class MesTrajetsPage implements OnInit {

  constructor(private location : Location) { }

  myBackButton(){
    this.location.back();
  }

  ngOnInit() {
  }

}
