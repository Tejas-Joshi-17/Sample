import { Component } from '@angular/core';
import { NewUserService } from 'src/app/services/new-user.service';

@Component({
  selector: 'app-conformation',
  templateUrl: './conformation.component.html',
  styleUrls: ['./conformation.component.css']
})
export class ConformationComponent {
  User_Data = {
    UserName: "",
    User_Name: "",
    Email: "",
    Password: "",
  }
  constructor(private _new_registration:NewUserService){
    this.User_Data.UserName = this._new_registration.New_User_UserName
    this.User_Data.User_Name = this._new_registration.New_User_User_Name
    this.User_Data.Email = this._new_registration.New_User_Email
    this.User_Data.Password = this._new_registration.New_User_Password

  }

  New_Register(){
    this._new_registration.Registration(this.User_Data).subscribe(
      response =>{
        console.log(response)
      },error =>{
        console.log(error)
      }
    )
  }
}
