import { Component,ViewChild } from '@angular/core';
import { IonInfiniteScroll} from '@ionic/angular'
// import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  // @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  public posts = [];

  constructor() {
    this.addMore()
    // console.log(afs.collection('items').valueChanges())
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
    this.posts.push(i)      
    }
  }
  getFriendPosts(){
    // let friends = 
  }

  }