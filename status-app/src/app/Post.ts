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
    constructor(name: string, id: string, user: User, 
        timebomb: Date,type: PostType,nickname: string,) {
        
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