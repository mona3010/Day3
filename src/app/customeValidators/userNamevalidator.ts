
import { AbstractControl, ValidatorFn } from "@angular/forms";
export function ForbiddenNamesValidator(forbiddenNames:RegExp[]):ValidatorFn{
   return (control:AbstractControl)=>
   {
      for(let name of forbiddenNames)
      {
          var forbidden = name.test(control.value);
          if(forbidden)
          {
              return {"forbiddenName":{value:control.value}};
          }
      }
      return null;
   }
}