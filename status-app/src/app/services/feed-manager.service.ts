import { Tab1Page } from './../tab1/tab1.page';
import { FeedCellComponent } from './../tab1/feed-cell/feed-cell.component';
import {ComponentFactoryResolver,Injectable,Inject,ReflectiveInjector} from '@angular/core'


@Injectable({
  providedIn: 'root'
})
export class FeedManagerService {
//* global currentPosts
  currentPosts: Array<number> = []
  constructor() { }


  generateFeed(){
    // for (let i = this.currentPosts.length; i < this.currentPosts.length+ 10; i++) {
    //   this.currentPosts.push(i)  
    // }  
    let num = this.currentPosts.length + 10
    for (let i = Number(this.currentPosts.length); i < num; i++) {
      this.currentPosts.push(i)  
      
    }
    // this.currentPosts.push(10)  
  }
  updateFeed(i: number){
    return this.currentPosts[i]
  }



}
