import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AskConfirmationPage } from 'src/app/shared/modals/ask-confirmation/ask-confirmation.page';
import { OtpCodePage } from 'src/app/shared/modals/otp-code/otp-code.page';

@Component({
  selector: 'app-mon-profil',
  templateUrl: './mon-profil.page.html',
  styleUrls: ['./mon-profil.page.scss'],
})
export class MonProfilPage implements OnInit {

  constructor(
    private location : Location,
    private modalController : ModalController 
    ) { }

  ngOnInit() {
  }

  myBackButton(){
    this.location.back();
  }

  async confirmationDelete() {
    const modal = await this.modalController.create({
      component: AskConfirmationPage,
      cssClass: 'ask-confirmation',
      backdropDismiss: true,
      mode: 'ios',
    });
    await modal.present();

    modal.onDidDismiss();
  }
  
  async confirmTel(){

    const modal = await this.modalController.create({
      component: OtpCodePage,
      cssClass: 'otp',
      backdropDismiss: true,
      mode: 'ios',
    });
    await modal.present();

    modal.onDidDismiss();

  }

}
