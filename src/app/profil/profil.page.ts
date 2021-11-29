import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {


  items = [
    {title : 'Mon profil', to:'mon-profil'},
    {title : 'Mes trajets', to:'mes-trajets'},
    {title : 'Mes expéditions', to:'mes-expeditions'},
    {title : 'Mes messages', to:'mes-messages'},
    {title : 'Gestion de colis', to:'gestion-colis'},
    {title : 'Invites tes amis', to:'inviter-amis'},
    {title : 'Questions fréquentes', to:'questions-frequentes'},
    {title : 'Nous contacter', to:'nous-contacter'},
    {title : 'CGU', to:'cgu'},
  ]
  constructor() { }

  ngOnInit() {
  }

}
