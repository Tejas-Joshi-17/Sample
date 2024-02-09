import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { UserdeatilsService } from 'src/app/services/userdeatils.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  constructor(private router:Router, private _userdetails : UserdeatilsService){}

  onClick(){
    this.router.navigate(['signin/createaccount'])
  }


  User_Data = {
    Name: '',
    Password: '',
  };

  disable_submit = true;
  disable_reset = true

  Check_Submit() {
    this.disable_submit = !(this.User_Data.Name !== '' && this.User_Data.Password !== '');
    this.disable_reset = !(this.User_Data.Name !== '' || this.User_Data.Password !== '');
  }

  Do_Submit() {

    console.log(`Try to Submit Form`);
    console.log(this.User_Data);

    this._userdetails.User_Name = this.User_Data.Name
    this.router.navigate(['dashboard'])
  }

  Do_Reset() {
    this.User_Data = {
      Name: '',
      Password: '',
    };
    this.disable_reset = true;
    this.disable_submit = true;
  }

}
