import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-contacter-expediteur',
  templateUrl: './contacter-expediteur.page.html',
  styleUrls: ['./contacter-expediteur.page.scss'],
})
export class ContacterExpediteurPage implements OnInit {

  constructor(private modalCtrl : ModalController) { }

  dismiss(){
    this.modalCtrl.dismiss()
  }

  ngOnInit() {
  }

}
