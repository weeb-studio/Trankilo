import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.page.html',
  styleUrls: ['./acceuil.page.scss'],
})
export class AcceuilPage implements OnInit {

  items = [
    {title:"Ajoutez vos informations", to:""},
    {title:"Téléchargez votre pièce d’identité", to:""},
    {title:"Renseignez vos informations de livvraison", to:""},
    {title:"Téléchargez votre justificatif de domicile", to:""},
  ]
  constructor() { }

  ngOnInit() {
  }

}
