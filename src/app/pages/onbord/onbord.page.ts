import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-onbord',
  templateUrl: './onbord.page.html',
  styleUrls: ['./onbord.page.scss'],
})
export class OnbordPage implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;

  index = true;
  constructor() { }

  next() {
    this.slides.slideNext().then(() => {
      this.slides.getActiveIndex().then((res: any) => {
        if (res === 2) {
          this.index = false;
        } else {
          this.index = true;
        }
      });
    });
  }

  ngOnInit() {
  }

}
