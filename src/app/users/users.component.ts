import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/Shared Classes and types/Iuser';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  user:IUser[]=[];
  errorMsg : string ="";
  constructor(private userServices:UserService) { }

  ngOnInit(): void {
    this.userServices.returnAllUsers().subscribe(
      data=>{this.user=data},
      responseError =>{this.errorMsg=responseError}
    )
  }

}
