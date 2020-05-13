import { Post } from './Post';
//*Class for User

export interface simpleUserObj{
    name: string;
    nickname?: string;
    uid: string; 
}

export interface complexUserObj{
    name: string;
    nickname?: string;
    uid: string; 
    phoneNum: string;
    password: string;
    friends: [User];
    currentPosts: [Post];
    status: Post;
}



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
    public nickname: string;
    public uid: string; 
    public phoneNum?: string;
    public password?: string;
    public friends?: [User];
    public currentPosts?: [Post];
    public status?: Post;

    public constructor(user:simpleUserObj);
    public constructor(user:complexUserObj) {
        this.name = user.name
        this.nickname = user.nickname
        this.uid = user.uid,
        this.phoneNum = user.phoneNum,
        this.password = user.password,
        this.friends = user.friends,
        this.currentPosts = user.currentPosts,
        this.status = user.status

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


