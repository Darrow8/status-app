import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Pipe, PipeTransform, SecurityContext } from '@angular/core';

@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer){}

  transform(url): any {
    console.log(url)
    return this.sanitizer.sanitize(SecurityContext.URL,url)
  }

}
