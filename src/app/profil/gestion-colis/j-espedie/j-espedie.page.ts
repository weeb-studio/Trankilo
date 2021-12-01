import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-j-espedie',
  templateUrl: './j-espedie.page.html',
  styleUrls: ['./j-espedie.page.scss'],
})
export class JEspediePage implements OnInit {

  constructor(private location : Location) { }

  myBackButton(){
    this.location.back();
  }

  ngOnInit() {
  }

}
