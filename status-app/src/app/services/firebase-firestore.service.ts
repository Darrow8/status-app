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


  //* putting it all together
  async getFriendPosts(currentLimit: number){
    let tyler = this.getUser("8LsA2ZC7P8dBUFnVgrPy")
    let cutFriendsPosts = []; //*cut because it is not all of them
    console.log(tyler)
    return await this.getFriendsPosts(await tyler).then(friendsPost =>{
        // let cutFriendsPosts : [User]; 
        //*cut the number of posts
        for (let i = 0; i < currentLimit; i++) {
          if(i < friendsPost.length){
            cutFriendsPosts.push(friendsPost[i] as User)
          }
          else{
            cutFriendsPosts.push(friendsPost[i % friendsPost.length])
          }
          console.log(cutFriendsPosts)
        }
      return(this.getFeed(cutFriendsPosts as [User]))
    })
  }


  //* retrieves user
  async getUser(uid: String){
    let metaData = this.firestore.collection('Users').doc(uid.toString())
    let userData: anyUserObj;
    let promise = await new Promise((res, rej) => {
      metaData.valueChanges().subscribe((vals)=>{
          userData = vals
          res(userData as any)
      })
    })
    await Promise.all([promise]);

    let finalUser = new User(userData)

    return finalUser
  }
  
  //*orders feed of posts
  getFeed(friends: [User]): [Post]{
    let allPosts = []
    //*get all user's posts
    friends.forEach(friend =>{
      friend.currentPosts.forEach(post =>{
        allPosts.push(post) 
      })
    })
    //*sort allPosts based on timestamp
    return (allPosts.sort((postA : Post,postB: Post) =>{
      if(postA.timestamp > postB.timestamp){
        return 1
      }else if(postA.timestamp < postB.timestamp){
        return -1
      }else{
        return 0
      }
    }) as [Post])
  }


    async getFriendsPosts(host: User) : Promise<[User]>{
      let userFriendsID = host.friends
      let userFriends = []
      return new Promise((res, rej) => {
        userFriendsID.map(async uid =>{
          let val = new User(await this.checkFriend(uid))
          userFriends.push(val)
          if( userFriends.length == userFriendsID.length){
            res(userFriends as [User])
          }
        })
      })
    }


    //*convert to users with promises
    async checkFriend(uid){
      let metaData;
      let postInterface= [];
      let friendInterface : unknown;
      //*getting the post history
      let promise1 = await new Promise((res, rej) => {
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
      let promise2 = await new Promise((res, rej) => {
        metaData.valueChanges().subscribe(vals =>{
          //*set post master to user
          postInterface.forEach(post =>{
            post.user = vals
          })
          //*attribute post & configure user
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
      // console.log(friendInterface)
      return (friendInterface)
    }


  getPostHistory(user: User){

  }
}