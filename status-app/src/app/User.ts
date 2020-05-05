export class User {
    //*Class for User
    /**
     * @param name name of user
     * @param id the id of the user
     * @param phonenum the phone number of the user
     * @param password the password of the user
     */

    name: string;
    id: string; 
    phonenum: string;
    password: string;
    friends: [User];
    constructor(name: string, id: string, phonenum: string, password: string,friends: [User]) {
        this.name = name,
        this.id = id,
        this.phonenum = phonenum,
        this.password = password,
        this.friends = friends
    }
    returnInfo(){
        console.log("---------------------")
        console.log("User Log of " + this.id)
        console.log("User's name " + this.name)
        console.log("User's id " + this.id)
        console.log("User's phone number " + this.phonenum)
        console.log("---------------------")

    }
    createPost(){
        // TODO write create post class
    }
    addFriend(){
        // TODO write create add friend class
    }

}