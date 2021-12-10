import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-porte-monnaie',
  templateUrl: './porte-monnaie.page.html',
  styleUrls: ['./porte-monnaie.page.scss'],
})
export class PorteMonnaiePage implements OnInit {

  items =[
    {periode:'Cette semaine', prix:'65€'},
    {periode:'Ce moic-ci', prix:'450€'},
    {periode:'Cette année', prix:'1500€'},
    {periode:'En attente de virement', prix:'35€'},
  ]
  constructor(private location : Location) { }

  myBackButton(){
    this.location.back();
  }

  ngOnInit() {
  }

}
