import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  mail:any=''
  passcode:any=''
  terms:boolean=false

  constructor() {}
  addcustomer(formValue:NgForm){
    console.log(formValue.value);
    
  }
  resetform(formValue:NgForm){
    formValue.reset();
    
    
  }
  ngOnInit(): void {

   
  }

}
