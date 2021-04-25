import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IPost } from 'src/Shared Classes and types/Iposts';
import { productcontroller } from '../API/productcontroller';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
//   url = BaseURL + "Posts.json"
url=productcontroller.GetAllPosts;

  constructor(private http: HttpClient) { }

  returnAllposts():Observable<IPost[]>
  {
    return this.http.get<IPost[]>(this.url).pipe(catchError((err)=>
    {
      return throwError(err.message ||"not found");
    }));
  }
}