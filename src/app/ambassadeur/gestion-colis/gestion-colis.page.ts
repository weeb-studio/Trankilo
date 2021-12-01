import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-colis',
  templateUrl: './gestion-colis.page.html',
  styleUrls: ['./gestion-colis.page.scss'],
})
export class GestionColisPage implements OnInit {

  items = [
    {title:"Colis à venir", icon:"assets/icon/icon1.svg", to:"../gestion-colis/colis-a-venir"},
    {title:"Colis reçus", icon:"assets/icon/icon2.svg", to:"../gestion-colis/colis-recus"},
    {title:"Colis livrés", icon:"assets/icon/icon3.svg", to:"../gestion-colis/colis-livres"},
  ]
  constructor() { }

  ngOnInit() {
  }

}
