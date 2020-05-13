import { User } from './../../User';
import { FeedManagerService } from './../../services/feed-manager.service';
import { Tab1Page } from './../tab1.page';
import { Post } from './../../Post';
import { Component, Input, OnInit,
   ViewChild, Directive, ElementRef } from '@angular/core';
// import { AdComponent }      from './ad.component';


@Component({
  selector: 'app-feed-cell',
  templateUrl: './feed-cell.component.html',
  styleUrls: ['./feed-cell.component.scss'],
})
export class FeedCellComponent implements OnInit {
  @Input() post; //*placeholder
  title: string;
  poster: User;

  constructor(public fms: FeedManagerService) {
    // this.post = fms.updateFeed(this.value)
  }

  ngOnInit() {
    // console.log(this.post)
    console.log(this.post)
    // this.setNum()
    this.title = this.post.title
    this.poster = this.post.user
    console.log(this.poster.nickname)
    console.log(this.post.user.nickname)

  }
  // setNum(){
  //   this.post = this.fms.updateFeed(this.value)
  // }



}
