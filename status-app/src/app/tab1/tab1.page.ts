import { FeedManagerService } from './../services/feed-manager.service';
import { Component, Output, ViewChild, Directive, ViewContainerRef } from '@angular/core';

import { IonInfiniteScroll} from '@ionic/angular'
import { FormStyle } from '@angular/common';
// import { ComponentFactoryResolver}
// import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  // @Output() num: number;

  // @Output() public posts = [];

  constructor(public viewContainerRef: ViewContainerRef, public fms: FeedManagerService) {
    fms.generateFeed()
    // this.posts = fms.outputFeed()
  }

  createComponent(type) {
 
  }

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      this.fms.generateFeed()
      event.target.complete();
    }, 500);
  }
  getFriendPosts(){
    // let friends = 
  }

  }