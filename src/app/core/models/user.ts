export interface UserModel {
    id?:number;
    firstName: string;
    lastName: string;
    email: string;
    gender?: string
    heroes?: string[]; 
    userId?: number;
    age? : number;
    _id?: string;
}

export interface User {
    email : string;
    password : string;
  }
  
export interface UserSignUp {
    email : string;
    firstName : string;
    lastName : string;
    password : string;
}

export interface UserInfo {
    token : string;
    user : UserModel
}