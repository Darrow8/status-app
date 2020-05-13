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
  // public posts = []
  num: number
  @Input() value: number;

  constructor(public fms: FeedManagerService) {
    this.num = fms.updateFeed(this.value)
  }

  ngOnInit() {
    // this.value = num;
    // console.log(this.posts)
    console.log(this.num)
    console.log(this.value)
    this.setNum()

  }
  setNum(){
    this.num = this.fms.updateFeed(this.value)
  }



}
