import { MatchPasswordValidators } from './match-password.validators';
import { Router } from '@angular/router';
import { AuthService } from './../../service/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form:any;
  constructor(private fb:FormBuilder, private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name:['', Validators.required],
      phonenumber:['', Validators.required],
      confirmpassword:['', Validators.required],
      address:['', Validators.required],
      email:['', Validators.required],
      password:['', Validators.required]
    },{
      validators:[MatchPasswordValidators.PasswordShouldMatch]
    });
  }
  get name(){
    return this.form.get('name');
  }
  get phonenumber(){
    return this.form.get('phonenumber');
  }
  get address(){
    return this.form.get('address');
  }
  get confirmpassword(){
    return this.form.get('confirmpassword');
  }
  get email(){
    return this.form.get('email');
  }
  get password(){
    return this.form.get('password');
  }

  registration(formInput:any){
    this.auth.registration(formInput).subscribe(result => {
      this.router.navigate(['/login']);
    });
  }

}
