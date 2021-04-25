import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ConfirmPasswordValidator } from '../customeValidators/ConfirmPasswordValidator';
import { ForbiddenNamesValidator } from '../customeValidators/userNamevalidator';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
            //lab5
  // topics=["Facebook","Twitter","Google"];
  // userModel=new User(
  //                    'mona',
  //                    'mona@gmail.com',
  //                    '12345',
  //                    '12345',
  //                    'Facebook');


        //lab6
  
 Sites: any = ['twitter','facebook ','google']

 registerForm=this.fb.group({
   userName :['',[Validators.required,ForbiddenNamesValidator([/user/])]],
   email:[''],
   password:[''],
   confirmPassword:[''],
   siteName: [''],
 },{validators:[ConfirmPasswordValidator]})

 get userName ()
  {
    return this.registerForm.get('userName');
  }
  get email()
  {
    return this.registerForm.get('email');

  }
  
get siteName() {
  return this.registerForm.get('siteName');
}

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  changeSite(e:any) {
    this.siteName?.setValue(e.target.value, {
      onlySelf: true
    })
  }
  
}


