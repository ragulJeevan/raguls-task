import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
  inputs:['isSelected']
})
export class AuthorsComponent implements OnInit,OnDestroy {
  
  dateExample=Date.now();
  view(){
    console.log(this.username)
  }
  isSelected: boolean = true

  isSuccess=true;

  username="Ragul"
  author:any;
  constructor( dataservice:DataServiceService,private route:ActivatedRoute) {
    this.author = dataservice.getauthors();
   }
   
  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    
  }
}
