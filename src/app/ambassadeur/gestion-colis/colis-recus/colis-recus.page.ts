import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { RemisTransporteurPage } from 'src/app/shared/modals/remis-transporteur/remis-transporteur.page';
import { DetailsPageModule } from 'src/app/shared/popover/details/details.module';
import { DetailsPage } from 'src/app/shared/popover/details/details.page';

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
    private modalCtrl : ModalController,
    private popoverCtrl : PopoverController
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

  async openPopover(ev : any){
    const popover = await this.popoverCtrl.create({
      component: DetailsPage,
      cssClass : 'pop-css',
      event : ev
    });
    await popover.present();
  }

  ngOnInit() {
  }

}
