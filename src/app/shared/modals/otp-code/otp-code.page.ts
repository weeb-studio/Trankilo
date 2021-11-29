import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-otp-code',
  templateUrl: './otp-code.page.html',
  styleUrls: ['./otp-code.page.scss'],
})
export class OtpCodePage implements OnInit {

  constructor(private modalCtrl : ModalController) { }

  dismiss(){
    this.modalCtrl.dismiss('');
  }

  ngOnInit() {
  }

}
