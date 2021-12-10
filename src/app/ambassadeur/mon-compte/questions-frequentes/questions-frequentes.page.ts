import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions-frequentes',
  templateUrl: './questions-frequentes.page.html',
  styleUrls: ['./questions-frequentes.page.scss'],
})
export class QuestionsFrequentesPage implements OnInit {

  div1 : boolean = false;
  div2 : boolean = false;
  div3 : boolean = false;
  div4 : boolean = false;
  div5 : boolean = false;
  constructor(private location : Location) { }

  myBackButton(){
    this.location.back()
  }

  ngOnInit() {
  }

}
