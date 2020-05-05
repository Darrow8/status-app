import { Post } from './Post';
//*Class for User
export class User {
    /**
     * @param name name of user
     * @param nickname the nickname of the user
     * @param uid the uid of the user
     * @param phoneNum the phone number of the user
     * @param password the password of the user
     * @param friends the friends of the user
     * @param currentPosts the current posts the user has open
     * @param status the user's current status
     */

    public name: string;
    public nickname?: string;
    public uid: string; 
    public phoneNum: number;
    public password: string;
    public friends?: [User?];
    public currentPosts?: [Post?];
    public status?: Post;
    constructor(name: string, 
        uid: string, phoneNum: number, 
        password: string,friends: [User?],nickname: string,
        currentPosts: [Post?],status: Post
        ) {
        this.name = name
        this.nickname = nickname
        this.uid = uid,
        this.phoneNum = phoneNum,
        this.password = password,
        this.friends = friends,
        this.currentPosts = currentPosts,
        this.status = status

    }
    //* For debugging lots of stuff
    returnInfo(){
        console.log("---------------------")
        console.log("User Log of " + this.uid)
        console.log("User's name " + this.name)
        console.log("User's uid " + this.uid)
        console.log("User's phone number " + this.phoneNum)
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