import { FirebaseFirestoreService } from './../services/firebase-firestore.service';
import { FirebaseAuthService } from './../services/firebase-auth.service';
import { FeedManagerService } from './../services/feed-manager.service';
import { Component, Output, ViewChild, Directive, ViewContainerRef, OnInit } from '@angular/core';

import { IonInfiniteScroll} from '@ionic/angular'
import { FormStyle } from '@angular/common';
// import { ComponentFactoryResolver}
// import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  // @Output() num: number;

  @Output() public posts = [];
  public currentLimit = 10; //*number of posts

  constructor(public viewContainerRef: ViewContainerRef, public ffs:FirebaseFirestoreService, public fms: FeedManagerService) {
    // fms.generateFeed()
  }

  createComponent(type) {
 
  }

  async loadData(event) {
    let newData = await this.ffs.getFriendPosts(this.currentLimit)
    setTimeout(() => {
      console.log('Done');
      newData.forEach(data =>{

        this.posts.push(data)
      })
      console.log(this.posts)
      event.target.complete();
    }, 500);
  }

  async ngOnInit(){
    this.posts = await this.ffs.getFriendPosts(this.currentLimit)
    console.log(this.posts)

  }

  }