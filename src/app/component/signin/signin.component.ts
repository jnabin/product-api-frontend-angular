import { UnAuthorizeError } from './../../common/unauthorize-error';
import { AppError } from './../../common/app-error';
import { Router } from '@angular/router';
import { AuthService } from './../../service/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  form:any;
  constructor(private fb:FormBuilder, private auth:AuthService, private router:Router) { }
  invalidLogin:boolean = false;

  ngOnInit(): void {
    this.form = this.fb.group({
      email:['', Validators.required],
      password:['', Validators.required]
    });
    if(localStorage.getItem('token') != null){
      this.router.navigate(['/home']);
    }
  }
  get email(){
    return this.form.get('email');
  }
  get password(){
    return this.form.get('password');
  }

  login(formInput:any){
    this.auth.login(formInput).subscribe(result => {
      if(result){
        this.router.navigate(['/home']);
      }else{
        this.invalidLogin = true;
      }
    },
    (error:AppError) => {
      if(error instanceof UnAuthorizeError){
        this.invalidLogin = true;
      }else{
        console.log(error);
      }
    });
  }

}
