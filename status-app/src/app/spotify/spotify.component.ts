import { Platform } from '@ionic/angular';
import { InAppBrowser, InAppBrowserEvent, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
import { SpotifyService } from './../services/spotify.service';
import { SafePipe } from './../safe.pipe';
import { Component, OnInit } from '@angular/core';
// import { in}

@Component({
  selector: 'app-spotify',
  templateUrl: './spotify.component.html',
  styleUrls: ['./spotify.component.scss'],
})
export class SpotifyComponent implements OnInit {
  url;

  constructor(private platform:Platform,public Iab: InAppBrowser,public pipe: SafePipe, public spot: SpotifyService) { }

  ngOnInit() {
    this.url = this.pipe.transform(this.spot.authSpot());
    this.platform.ready().then(() => {
      let browser = this.Iab.create(this.url,"_blank","hidden=yes,toolbar=no");
      browser.on('loadstop').subscribe(event => {
          console.log("load stop", event)
          browser.show();
          return browser.executeScript({
            code: ` //alert will not work here 
                  console.log("HELLO");
            `
          })
      })
    })
  }

}
