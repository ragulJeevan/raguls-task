import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators,ValidationErrors, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-module2',
  templateUrl: './module2.component.html',
  styleUrls: ['./module2.component.css']
})
export class Module2Component implements OnInit {
  RegisterForm!: FormGroup;

  containUppercase(control:AbstractControl):ValidationErrors| any{
      if((control.value as string).toLocaleUpperCase)
      {
        return{containUppercase:false};
        return null;
      }
  }

  get firstName(){
      return this.RegisterForm.get('firstName')
  }
  get lastName(){
    return this.RegisterForm.get('lastName')
}
get password(){
  return this.RegisterForm.get('passcode')
}

resetForm(){
  this.RegisterForm.reset();
  console.log('form reset');
  
}


  constructor(private formBuilder:FormBuilder ) {

  }

  ngOnInit(): void {

    /*
      THIS IS FORM GROUP 
    this.RegisterForm= new FormGroup({
      'firstName':new FormControl(),
      'lastName':new FormControl(),
      'mobileNumber':new FormControl(),
      'email':new FormControl(),
      'passcode':new FormControl(),
      'passcodec':new FormControl(),

      NEXT IS USING FORM BUILDER
      
    })*/
    this.RegisterForm=this.formBuilder.group({
      firstName:new FormControl('',Validators.minLength(3)),
      'lastName':new FormControl('',Validators.required),
      'mobileNumber':new FormControl('',[
            Validators.minLength(10), Validators.required,
      ]),
      'email':new FormControl('',[
        Validators.email,
      ]),
      'passcode':new FormControl('',[
        Validators.required,Validators.minLength(8),
      ]),
      'passcodec':new FormControl('',[
        Validators.required,
      ]),
    });

   
    


  }
  register(){
    console.log(this.RegisterForm.value);
    console.log(this.RegisterForm.valid);
    console.log(this.RegisterForm.get('firstName')?.valid);
    console.log(this.RegisterForm.get('lastName')?.valid);
    console.log(this.RegisterForm.get('mobileNumber')?.valid);
    console.log(this.RegisterForm.get('email')?.valid);
    console.log(this.RegisterForm.get('passcode')?.valid);
    console.log(this.RegisterForm.get('passcodec')?.valid);
    
    
  }

}
          