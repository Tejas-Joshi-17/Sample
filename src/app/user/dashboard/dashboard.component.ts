import { Component } from '@angular/core';
import { UserdeatilsService } from 'src/app/services/userdeatils.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  UserName:string = ""
  constructor(private _userdeatils: UserdeatilsService){
    this.UserName = _userdeatils.Get_User_Name()
  }
  
}
