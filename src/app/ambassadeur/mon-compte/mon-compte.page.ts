import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mon-compte',
  templateUrl: './mon-compte.page.html',
  styleUrls: ['./mon-compte.page.scss'],
})
export class MonComptePage implements OnInit {

  items = [
    {title : 'Mes informations', to:'../mon-compte/mes-informations'},
    {title : 'Gestion des colis', to:'../gestion-colis'},
    {title : 'Mes disponibilités', to:'../mes-disponibilites'},
    {title : 'Mes discussions', to:'../mon-compte/mes-discussions'},
    {title : 'Mon porte-monnaie', to:'../mon-compte/porte-monnaie'},
    {title : 'Mes vérifications', to:'../mon-compte/mes-verifications'},
    {title : 'Questions fréquentes', to:'../mon-compte/questions-frequentes'},
    {title : 'Nous contacter', to:'../mon-compte/nous-contacter'},
  ]
  constructor() { }

  ngOnInit() {
  }

}
