import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'bootstrap-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  addLoanTypesForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.addLoanTypesForm=new FormGroup({
      'loanName': new FormControl(),
      'loanDescription': new FormControl()
                                       })
   
                    }
                    addLoanType(){
                      console.log(this.addLoanTypesForm.value);
                      
                    }
    
                                                }


