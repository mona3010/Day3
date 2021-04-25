import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ForbiddenNamesValidator } from '../customeValidators/userNamevalidator';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  products = ["pro1" , "pro2" , "pro3" , "pro4"];
  discountClass = {'d-none' : true}
  constructor(private fb: FormBuilder , private renderer2: Renderer2) { }

  registerForm=this.fb.group({
    userName :['',[Validators.required,ForbiddenNamesValidator([/^admin$/ , /^adminstrator$/])]],
    product : [''],
    discount:[false],
    discountValue:[''] ,
    comment:[''],
    alternativeComments:this.fb.array([])
  });

  ngOnInit(): void {
  }
  get userName ()
  {
    return this.registerForm.get('userName');
  }

  get product ()
  {
    return this.registerForm.get('product');
  }

  get discountValue()
  {
    return this.registerForm.get('discountValue');
  }

  get alternativeComments ()
  {
    return this.registerForm.get('alternativeComments') as FormArray;
  }

  removeComment(controlIndex: number)
  {
    this.alternativeComments.removeAt(controlIndex);
  }

  addNewComment()
  {
    this.alternativeComments.push(this.fb.control(''))
  }
  setDiscountToRequired()
  {
    this.registerForm?.get('discount')?.valueChanges.subscribe(checkedValue=>{
      if(checkedValue)
      {
          this.discountValue?.setValidators(Validators.required);
          this.discountClass = {'d-none' : false}
      }
      else
      {
          this.discountValue?.clearValidators();
          this.discountClass = {'d-none' : true}
      }
      this.discountValue?.updateValueAndValidity();
    })
  }


}




  
