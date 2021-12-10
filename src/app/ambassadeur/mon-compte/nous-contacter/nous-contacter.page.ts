import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nous-contacter',
  templateUrl: './nous-contacter.page.html',
  styleUrls: ['./nous-contacter.page.scss'],
})
export class NousContacterPage implements OnInit {

  focused : boolean;
  constructor(private location : Location) { }

  myBackButton(){
    this.location.back();
  }

  onBlur(event: any) {
    const value = event.target.value;

    if (!value) {
      this.focused = false;
    }
  }

  ngOnInit() {
  }

}
