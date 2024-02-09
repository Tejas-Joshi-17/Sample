import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConformationComponent } from '../conformation/conformation.component';
import { NewUserService } from 'src/app/services/new-user.service';


@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {

  constructor(private router:Router, private dialog: MatDialog, private _new_user:NewUserService){}
  onClick(){
    this.router.navigate(['signin'])
  }

  
  User_Data = {
    UserName: '',
    User_Name: "",
    Email: "",
    Password: '',
  };

  disable_submit = true;
  disable_reset = true

  Check_Submit() {
    this.disable_submit = !(this.User_Data.UserName !== '' && this.User_Data.User_Name !== '' && this.User_Data.Email !== ''&& this.User_Data.Password !== '');
    this.disable_reset = !(this.User_Data.UserName !== '' || this.User_Data.Password !== '' || this.User_Data.Email !== '' || this.User_Data.Password);
  }

  openDialog() {
    const dialogRef = this.dialog.open(ConformationComponent);
  }

  Do_Submit() {
    
    this._new_user.New_User_UserName = this.User_Data.UserName
    this._new_user.New_User_Email = this.User_Data.Email
    this._new_user.New_User_User_Name = this.User_Data.User_Name
    this._new_user.New_User_Password = this.User_Data.Password
    this.dialog.open(ConformationComponent);
    console.log(`Try to Submit Form`);
    console.log(this.User_Data);

  }

  Do_Reset() {
    this.User_Data = {
      UserName: '',
      User_Name: '',
      Email: '',
      Password: ''
    };
    this.disable_reset = true;
    this.disable_submit = true;
  }
}
