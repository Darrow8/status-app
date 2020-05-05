import { Post } from './Post';
//*Class for User
export class User {
    /**
     * @param name name of user
     * @param nickname the nickname of the user
     * @param id the id of the user
     * @param phonenum the phone number of the user
     * @param password the password of the user
     * @param friends the friends of the user
     * @param currentPosts the current posts the user has open
     * @param status the user's current status
     */

    name: string;
    nickname: string;
    id: string; 
    phonenum: string;
    password: string;
    friends: [User];
    currentPosts: [Post];
    status: Post;
    constructor(name: string, id: string, phonenum: string, 
        password: string,friends: [User],nickname: string,
        currentPosts: [Post],status: Post) {
        this.name = name,
        this.nickname = nickname
        this.id = id,
        this.phonenum = phonenum,
        this.password = password,
        this.friends = friends,
        this.currentPosts = currentPosts,
        this.status = status

    }
    //* For debugging lots of stuff
    returnInfo(){
        console.log("---------------------")
        console.log("User Log of " + this.id)
        console.log("User's name " + this.name)
        console.log("User's id " + this.id)
        console.log("User's phone number " + this.phonenum)
        console.log("User's Friends are: " + this.friends)
        console.log("---------------------")

    }

    createPost(){
        // TODO write create post class
    }
    addFriend(){
        // TODO write create add friend class
    }

}