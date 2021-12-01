import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mes-discussions',
  templateUrl: './mes-discussions.page.html',
  styleUrls: ['./mes-discussions.page.scss'],
})
export class MesDiscussionsPage implements OnInit {

  items = [
    {},
    {},
    {},
    {},
  ]
  constructor() { }

  ngOnInit() {
  }

}
