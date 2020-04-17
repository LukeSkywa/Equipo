import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProfiloService } from 'src/app/services/profilo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;

  get emailControl(): FormControl{
    return this.loginForm.get('email') as FormControl;
  }
  
  get passwordControl(): FormControl{
    return this.loginForm.get('password') as FormControl;
  }

  constructor(private fb:FormBuilder, private profiloService:ProfiloService, private router:Router) { 
    this.loginForm=this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
    });
  }

  ngOnInit(): void {
  }

 login() {
    this.profiloService.eseguiLogin(this.emailControl.value,this.passwordControl.value);
  }

}
