import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empty-livres',
  templateUrl: './empty-livres.page.html',
  styleUrls: ['./empty-livres.page.scss'],
})
export class EmptyLivresPage implements OnInit {

  constructor(private location : Location) { }

  myBackButton(){
    this.location.back();
  }

  ngOnInit() {
  }

}
