import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-details-expedition',
  templateUrl: './details-expedition.page.html',
  styleUrls: ['./details-expedition.page.scss'],
})
export class DetailsExpeditionPage implements OnInit {

  constructor(private modalCtrl : ModalController) { }

  dismiss(){
    this.modalCtrl.dismiss();
  }

  ngOnInit() {
  }

}
