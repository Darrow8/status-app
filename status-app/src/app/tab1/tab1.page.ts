import { Component,ViewChild } from '@angular/core';
import { IonInfiniteScroll} from '@ionic/angular'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  public items = [];

  constructor() {
    this.addMore()
  }

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      this.addMore()
      event.target.complete();
    }, 500);
  }
  addMore(){
    for (let i = 0; i < 10; i++) {
    this.items.push(i)      
    }
  }


  }