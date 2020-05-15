import { Post } from './Post';
//*Class for User

export interface simpleUserObj{
    name: string;
    nickname?: string;
    uid: string; 
    timestamp: number;
}

export interface complexUserObj{
    name: string;
    nickname?: string;
    uid: string; 
    friends?: [String];
    currentPosts: [Post?];
    status?: Post;
    timestamp: number;
}


export interface initalizationUserObj{
    name: string;
    nickname: string;
    uid: string; 
    phoneNum: string;
    password: string;
    friends: [];
    currentPosts: [];
    status: Post;
    timestamp: number;
}

export interface anyUserObj{
    name?: string;
    nickname?: string;
    uid?: string; 
    phoneNum?: string;
    password?: string;
    friends?: [String];
    currentPosts?: [Post];
    status?: Post;
    timestamp?: number;
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
     * @param timestamp the time when the account was made
     */

    public name?: string;
    public nickname?: string;
    public uid?: string; 
    public phoneNum?: string;
    public password?: string;
    public friends?: [String]; //* gonna be the uids
    public currentPosts?: [Post?];
    public status?: Post;
    public timestamp?: number;

    // public constructor(user?:complexUserObj);
    // public constructor(user?:simpleUserObj);
    // public constructor(user?:anyUserObj);
    // public constructor(user: initalizationUserObj)
    public constructor(user?:any) {
        this.name = user && user.name || "";
        this.nickname = user && user.nickname || "";
        this.uid = user && user.uid || "";
        this.phoneNum = user && user.phoneNum || "";
        this.password = user && user.password || "";
        this.friends = user && user.friends || [];
        this.currentPosts = user && user.currentPosts || [];
        this.status = user && user.status || new Post({} as any)
        this.timestamp = user && user.timestamp

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

export enum userInterType{
    simpleUserObj,
    complexUserObj,
    initalizationUserObj
}
