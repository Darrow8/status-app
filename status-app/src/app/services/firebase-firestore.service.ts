import { User } from './../User';
import { AngularFirestore, AngularFirestoreDocument} from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FirebaseFirestoreService {
  // item: Observable<>;
  // item: Observable<User>;
  constructor(public firestore: AngularFirestore) {
    // firestore.
   }
   
  test(){
    // .doc("AaqIe7zkmgSfKMw8NlG4")
    let doc = this.firestore.collection('Users').doc("AaqIe7zkmgSfKMw8NlG4").valueChanges();
    doc.subscribe(vals =>{
      console.log(vals)
    })
    // console.log(doc)
    // console.log(this.firestore.doc('Users/AaqIe7zkmgSfKMw8NlG4').valueChanges())
  }
}
