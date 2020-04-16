import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'auth'
})
export class AuthPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
