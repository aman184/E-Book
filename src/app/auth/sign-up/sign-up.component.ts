import { Component } from '@angular/core';
import { SharedModule } from '../../shared-module';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  imports: [SharedModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {

  constructor(
    private router: Router,
  ){}

  signForm: FormGroup = new FormGroup({
    email : new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),

  });

  send(){
    console.log("form values:", this.signForm.value);
    if(this.signForm.valid){
      let data = {
        email: this.signForm.value.email,
        password: this.signForm.value.password,
        username: this.signForm.value.username,
      };
      let arr:any = [];
      let localStorageData = localStorage.getItem('userData');
      console.log("localStorageData",localStorageData);
      if(localStorageData){
        arr = JSON.parse(localStorageData)
      }

      arr.push(data);
      
      console.log(arr);
      localStorage.removeItem("userData");
      localStorage.setItem("userData",JSON.stringify(arr));
    }
    else{

    }
  }
}
