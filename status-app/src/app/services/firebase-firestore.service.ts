import { Post, complexPostInterface } from './../Post';
import { User, complexUserObj, userInterType, anyUserObj } from './../User';
import { AngularFirestore, AngularFirestoreDocument} from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FirebaseFirestoreService {
  // item: Observable<>;
  // item: Observable<User>;
  constructor(public firestore: AngularFirestore,public firestore2: AngularFirestore) {
   }

  async getUser(uid: String){
    let metaData = this.firestore.collection('Users').doc(uid.toString())
    let userData: anyUserObj;
    let promise = new Promise((res, rej) => {
      metaData.valueChanges().subscribe((vals)=>{
          userData = vals
          res(userData as any)
      })
    })
    await Promise.all([promise]);

    let finalUser = new User(userData)

    return finalUser
  }
  
  async getFriendsPosts(host: User){
    let userFriendsID = host.friends
    let userFriends = []
    let retrievedPosts: [Post[]?] = []
    userFriendsID.map(async uid =>{
      let val = new User(await this.checkFriend(uid))
      userFriends.push(val)
      console.log(userFriends)
    })
  }


  //*convert to users with promises
  async checkFriend(uid){
    let metaData;
    let postInterface= [];
    let friendInterface : unknown;
    //*getting the post history
    let promise1 = new Promise((res, rej) => {
      metaData = this.firestore.collection('Users').doc(uid.toString())
      let postData = metaData.collection('Posts')
      postData.valueChanges().subscribe(vals =>{
        vals.forEach(input => {
          postInterface.push({
            title: input.title,
            id: input.id,
            user: input.user,
            timebomb: input.timebomb,
            type: input.type,
            timestamp: input.timestamp
          } as complexPostInterface)      
        })
        res(vals)
      })
    })
    //*getting the user stats
    let promise2 = new Promise((res, rej) => {
      metaData.valueChanges().subscribe(vals =>{
        friendInterface = {
          name: vals.name,
          uid: vals.uid,
          nickname: vals.nickname,
          currentPosts: postInterface,
          status: new Post(postInterface[0] as any),
          timestamp: vals.timestamp,
        } as complexUserObj
        res(friendInterface as complexUserObj)
      })
    })
    await Promise.all([promise1,promise2])
    console.log(friendInterface)
    return (friendInterface)
  }


  getPostHistory(user: User){

  }
}