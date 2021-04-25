import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/Shared Classes and types/Iposts';
import { PostsService } from '../services/posts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts:IPost[]=[];
  errorMsg : string ="";
  
  constructor(private postServices:PostsService) { }
    ngOnInit(): void {
      this.postServices.returnAllposts().subscribe(
        data=>{this.posts=data},
        responseError =>{this.errorMsg=responseError}
      )
  
      
  }

}



 