import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import * as SpotifyWebApi from '../../../node_modules/spotify-web-api-js/src/spotify-web-api.js'



@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  readonly ROOT_URL = 'https://accounts.spotify.com'
  readonly access_token = 'BQCr_f0fZdiltRN9UjPHRCHUPeOjNo_w2af65q_9aAXDHYXDwOmxmd_wXzObY_PnONOtB5XlFjtKtbKoy2b-agG-LxTWlfypvst66Q68piKC6Xpk9ybcJ_kOiMgLAUe5mcUiDU__cCkD6346Jg5zA3R07mYHRmLKMHaPKTk'
  readonly CLIENT_ID = '39fcded4f141465a900c172126e8ad59'
  readonly CLIENT_SECRET = '4dc3c3397dcb4d11abf87eac1419ff6f'
  options: {
    headers?: HttpHeaders | {[header: string]: string | string[]},
    observe?: 'body' | 'events' | 'response',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    responseType?: 'arraybuffer'|'blob'|'json'|'text',
    withCredentials?: boolean,
  }


  constructor(
    private http: HttpClient, 
    // private spot: SpotifyWebApi
    ) { }

  authSpot(){
    let spotifyApi = new SpotifyWebApi();
    spotifyApi.setAccessToken(this.access_token);
    // // spotifyApi.setPromiseImplementation(Q);

    spotifyApi.getAlbums(['5U4W9E5WsYb2jUQWePT8Xm', '3KyVcddATClQKIdtaap4bV']).then(
      function (data) {
        console.log('Albums information', data);
      },
      function (err) {
        console.error(err);
      }
    );
  }
}
