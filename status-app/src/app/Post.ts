import { User } from './User';
import { Timestamp } from 'rxjs';
//* Class For Any Type of Post
export class Post {
    /**
     * @param name name of user
     * @param user the user that created this post
     * @param id the id of the user
     * @param timebomb the timer that will delete this post
     * @param type the type of post this is
     */
    name: string;
    id: string;
    user: User;
    timebomb: Date;
    type: PostType;

    constructor(name: string, id: string, user: User, 
        timebomb: Date, type: PostType) {
        this.name = name,
        this.id = id,
        this.user = user,
        this.timebomb = timebomb,
        this.type = type
    }
    //* For debugging lots of stuff
    returnInfo(){
        console.log("---------------------")
        console.log("Post Log of " + this.id)
        console.log("Post's name " + this.name)
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

enum PostType{
    status, //* this is a status post
    audio, //* this is an audio post
    text, //* this is a text post
    spotify, //* this is a spofity post
}