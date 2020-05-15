import { User } from './User';
import { Timestamp } from 'rxjs';
//* Class For Any Type of Post


export interface simplePostInterface{
    title: string;
    id: string;
    user: User;
    type: PostType;
    timestamp: Date;
}
export interface complexPostInterface{
    title: string;
    id: string;
    user: User;
    timebomb: Date;
    type: PostType;
    timestamp: Date;
}

export class Post {
    /**
     * @param title title of post
     * @param user the user that created this post
     * @param id the id of the user
     * @param timebomb the timer that will delete this post
     * @param type the type of post this is
     * @param timestamp the time when the post was created
     */
    public title: string;
    public id: string;
    public user: User;
    public timebomb: Date;
    public type: PostType;
    public timestamp: Date;

    constructor(post: simplePostInterface);
    constructor(post: complexPostInterface);
    constructor(post?: any) {
        this.title = post && post.title || "",
        this.id = post && post.id || "",
        this.user = post && post.user,
        this.timebomb = post && post.timebomb || "",
        this.type = post && post.type,
        this.timestamp = post && post.timestamp
    }
    //* For debugging lots of stuff
    returnInfo(){
        console.log("---------------------")
        console.log("Post Log of " + this.id)
        console.log("Post's title " + this.title)
        console.log("Post's id " + this.id)
        console.log("Post's user " + this.user)
        console.log("Post's timebomb date: " + this.timebomb)
        console.log("Post's type is: " + this.type)
        console.log("---------------------")

    }
    selfDestruct(){
        //TODO self destructs
    }
    
}

export enum PostType{
    status = "status",//* this is a status post
    audio = "audio", //* this is an audio post
    text = "text", //* this is a text post
    spotify = "spotify", //* this is a spofity post
}