import { Injectable, Optional } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TabService {
  private XYcor = new Map();
  constructor() { }

  getTab(start:number, end:number, h:number):Map<number,number>{
    let x = start, y = 0.0;
    while(x <= end){
      y = Math.sin(x);
      this.XYcor.set(x,y);
      x += h;
    }
    return this.XYcor;
  }
}
