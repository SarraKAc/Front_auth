import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms"
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public signupForm !: FormGroup;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router:Router) { }

  ngOnInit(): void {
  this.signupForm = this.formBuilder.group({
    name:['',Validators.required],
    surname:['',Validators.required],
    mobile:['',Validators.required],
    email:['',Validators.required],
    password:['',Validators.required],
  })
  }
  signup(){
this.http.post<any>("http://localhost:3000/signupusers",this.signupForm.value)
.subscribe(res=>{
  alert("Signup Successfull");
  this.signupForm.reset();
  this.router.navigate(["connexion"]);
  },err=>{
    alert("Something went wrong")
})  
}

}