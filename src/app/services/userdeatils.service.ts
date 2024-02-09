import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdeatilsService {
  User_Name:string = ""

  Create_User_Name:string = ""
  Create_User_Email:string = ""

  constructor() { }



  Get_User_Name(){
    return this.User_Name
  }
  Get_Create_User_Name(){
    return this.Create_User_Name
  }
  Get_Create_User_Email(){
    return this.Create_User_Email
  }
}
