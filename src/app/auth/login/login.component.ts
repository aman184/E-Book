import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedModule } from '../../shared-module';
import { Router } from '@angular/router';  // Import Router
@Component({
  selector: 'app-login',
  //  imports: [SharedModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class LoginComponent {
  abc:any
  messageError: string ='';
  constructor(
    private router: Router,
  ){}

  loginForm: FormGroup = new FormGroup({
    email : new FormControl(''),
    password : new FormControl(''),
  });

  submit(){
     console.log("form values:", this.loginForm.value);
    // console.log("form:", this.loginForm);

    // console.log("äbc:",this.abc);
    if(this.loginForm.valid){
      // let data ={
      //   email: this.loginForm.value.email,
      //   password: this.loginForm.value.password,
      // };
      let data2:any = localStorage.getItem('userData')
      
      if(data2){
        let localStorageData = JSON.parse(data2);
        console.log("localStorageData:",localStorageData);

        localStorageData.forEach((element:any) => {
          console.log("element:",element);
          if(element.email == this.loginForm.value.email && element.password == this.loginForm.value.password){
            console.log("login success");
            localStorage.setItem("loginStatus","1");
            this.router.navigate(['/dashboard']);
          }else{
            console.log("login fail");
          }
        });
      }

    }
   
    
  }
}
