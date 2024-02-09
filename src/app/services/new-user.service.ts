import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewUserService {
  New_User_UserName:string = ""
  New_User_User_Name:string = ""
  New_User_Email:string = ""
  New_User_Password:string = ""
  constructor(private http :HttpClient) { }

  private baseurl:string = "http://localhost:9090/add"
  Registration(Data:any){
    return this.http.post(`${this.baseurl}/`, Data)
  }
}
