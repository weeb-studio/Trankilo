import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { ContacterExpediteurPage } from '../../modals/contacter-expediteur/contacter-expediteur.page';
import { RemisTransporteurPage } from '../../modals/remis-transporteur/remis-transporteur.page';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  constructor(
    private modalCtrl : ModalController,
    private popoverCtrl : PopoverController
  ) { }

  async remisTransporteur(){
    const modal = await this.modalCtrl.create({
      component : RemisTransporteurPage,
      cssClass : 'remis-css',
      backdropDismiss : true,
      mode : 'ios'
    });
    await modal.present();
    modal.onDidDismiss();
    this.popoverCtrl.dismiss();
  }

  async contacterExpediteur(){
    const modal = await this.modalCtrl.create({
      component : ContacterExpediteurPage,
      cssClass : 'ask-css',
      backdropDismiss : true,
      mode : 'ios'
    });
    await modal.present();
    modal.onDidDismiss();
    this.popoverCtrl.dismiss();
  }

  ngOnInit() {
  }

}
