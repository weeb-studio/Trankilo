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
    {title : 'Mes messages', to:''},
    {title : 'Invites tes amis', to:''},
    {title : 'Questions fréquentes', to:''},
    {title : 'Nous contacter', to:''},
    {title : 'CGU', to:''},
  ]
  constructor() { }

  ngOnInit() {
  }

}
