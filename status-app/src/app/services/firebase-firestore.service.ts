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


  //*convert to users
  async checkFriend(uid){
    let metaData;
    let friendInterface : unknown;
    let promise = new Promise((res, rej) => {
      metaData = this.firestore.collection('Users').doc(uid.toString())
      metaData.valueChanges().subscribe(vals =>{
        // console.log(vals)
        friendInterface = {
          name: vals.name,
          uid: vals.uid,
          nickname: vals.nickname,
          currentPosts: [],
          status: new Post({} as any),
          timestamp: vals.timestamp,
        } as complexUserObj
        console.log(friendInterface)
        res(friendInterface as complexUserObj)
      })
    })
    await promise
    console.log(friendInterface)
    return (friendInterface)
    // console.log(final)
  }


  getPostHistory(user: User){

  }



  // test(){

  //   // let where = this.firestore.collection('Users',ref => ref.where('name', '==', 'Darrow')).valueChanges();
  //   let doc = this.firestore.collection('Users')
  //       .doc("AaqIe7zkmgSfKMw8NlG4")
  //       .collection('Posts')
  //       .doc('WNjR1X1lolMahkAhACvL')
  //       .valueChanges();

  //   doc.subscribe(vals =>{
  //     console.log(vals)
  //   })
  // }
}





    //       // let promise3 = new Promise((res, rej) => {
    //       //   let postData = metaData.collection('Posts')
    //       //   let friendPostData = postData.valueChanges().subscribe(vals =>{
    //       //     console.log(vals)
    //       //     return vals
    //       //   })
    //       //   res(friendPostData as [object])
    //       // });
    //       await Promise.all([promise2]);
    //       return new User(friendInterface)
    //       // console.log(friendData)
    //       // // friendInterface = {
    //       // //   name: friendData.name,
    //       // //   uid: friendData.uid,
    //       // //   nickname: friendData.nickname,
    //       // //   currentPosts: friendPostData,
    //       // //   status: new Post({} as any),
    //       // //   timestamp: friendData.timestamp,
    //       // // }
    //       // let newReplacement = new User(friendInterface)
    //       // console.log("completed " + newReplacement)
    //       // console.log(newReplacement)
    //       // return newReplacement
    //     // }
    //     // return await routeUsers(uid)})
    //     console.log(userFriends)
    //     res(userFriends as [User])
    //   }).then(val =>{
    //     console.log(val)
    //   })
    //   Promise.all([promise1]);
    // // console.log("FINAL IS: " + userFriends)
    // console.log(userFriends)
