import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RemisTransporteurPage } from 'src/app/shared/modals/remis-transporteur/remis-transporteur.page';

@Component({
  selector: 'app-colis-recus',
  templateUrl: './colis-recus.page.html',
  styleUrls: ['./colis-recus.page.scss'],
})
export class ColisRecusPage implements OnInit {

  items =[
    {},
    {},
    {},
  ]
  constructor(
    private location : Location,
    private modalCtrl : ModalController
    ) { }

  myBackButton(){
    this.location.back();
  }

  async remisTransporteur(){
    const modal = await this.modalCtrl.create({
      component : RemisTransporteurPage,
      cssClass : 'remis-css',
      backdropDismiss : true,
      mode : 'ios'
    });
    await modal.present();
    modal.onDidDismiss();
  }

  ngOnInit() {
  }

}
