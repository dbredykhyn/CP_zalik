import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'main.page.html',
  styleUrls: ['main.page.scss'],
})
export class MainPage {
  public result: Map<number,number>;

  ReceiveFromChild(event){
    this.result = event;
  }

  constructor() {}
}
