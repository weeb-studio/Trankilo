import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetailsExpeditionPage } from 'src/app/shared/details-expedition/details-expedition.page';

@Component({
  selector: 'app-colis-livres',
  templateUrl: './colis-livres.page.html',
  styleUrls: ['./colis-livres.page.scss'],
})
export class ColisLivresPage implements OnInit {

  constructor(
    private location : Location,
    private modalCtrl : ModalController
    ) { }

  myBackButton(){
    this.location.back();
  }

  async detailsExpedition(){
    const modal = await this.modalCtrl.create({
      component : DetailsExpeditionPage,
      cssClass : 'details-css',
      backdropDismiss : true,
      mode : 'ios'
    });
    await modal.present();
    modal.onDidDismiss()
  }

  ngOnInit() {
  }

}
