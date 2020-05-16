import { User, simpleUserObj } from './../User';
import { Post, simplePostInterface, PostType } from './../Post';
import { Tab1Page } from './../tab1/tab1.page';
import { FeedCellComponent } from './../tab1/feed-cell/feed-cell.component';
import {ComponentFactoryResolver,Injectable,Inject,ReflectiveInjector} from '@angular/core'


@Injectable({
  providedIn: 'root'
})
export class FeedManagerService {
//* global currentPosts
  currentPosts: Array<Post> = []
  constructor() { }


  // generateFeed(){
  //   let num = this.currentPosts.length + 10
  //   for (let i = Number(this.currentPosts.length); i < num; i++) {
  //     let userInterface: simpleUserObj = {
  //       name: "Kanye West",
  //       nickname: "ye",
  //       uid: "1",
  //       timestamp: new Date(1589412805)
  //     }
  //     let kanye: User = new User(userInterface)

  //     let postInterface: simplePostInterface = {
  //       title: "Mark Zuckerberg Invest 1 billion dollars into Kanye West Ideas",
  //       id: "12345",
  //       user: kanye,
  //       type: PostType.status,
  //       timestamp: new Date(1589412805)
  //     }
  //     let post: Post = new Post(postInterface)
      
  //     this.currentPosts.push(post)

  //   }
  // }

  updateFeed(i: number){
    return this.currentPosts[i]
  }



}
