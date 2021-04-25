import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { IUser } from 'src/Shared Classes and types/Iuser';
import { BaseURL } from '../config';
import { catchError } from 'rxjs/operators';
import { productcontroller } from '../API/productcontroller';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // url = BaseURL + "users.json"
  url=productcontroller.GetAllUsers;

  constructor(private http: HttpClient) { }

  returnAllUsers():Observable<IUser[]>
  {
    return this.http.get<IUser[]>(this.url).pipe(catchError((err)=>
    {
      return throwError(err.message ||"not found");
    }));
  }
}






