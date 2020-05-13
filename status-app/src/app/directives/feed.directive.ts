import { Directive, ElementRef,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFeed]'
})
export class FeedDirective {
  // Thanks to https://alligator.io/angular/viewchild-access-component/

  constructor(elem: ElementRef, renderer: Renderer2) {
    

  }

}
