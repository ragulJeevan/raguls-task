import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post:any

  constructor(httpclient:HttpClient) { 
    httpclient.get('https://jsonplaceholder.typicode.com/posts').subscribe(Response =>{
    console.log(Response);
    
    });
  }

  ngOnInit(): void {
  }

}
