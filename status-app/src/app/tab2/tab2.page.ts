import { SpotifyComponent } from './../spotify/spotify.component';
import { SpotifyService } from './../services/spotify.service';
import { FirebaseFirestoreService } from './../services/firebase-firestore.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SafePipe } from './../safe.pipe';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  posts;
  constructor(public ffs:FirebaseFirestoreService,public modalController: ModalController) {}

  async ngOnInit(){
    
    // await this.presentModal()
  }
  //* Presents modal from auth-comp component
  async presentModal() {
    const authModal = await this.modalController.create({
      component: SpotifyComponent
    });
    return await authModal.present();
  }
}
