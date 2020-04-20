import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Utente } from 'src/app/models/utente';
import { Router } from '@angular/router';
import { ProfiloService } from 'src/app/services/profilo.service';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.scss']
})
export class RegistrazioneComponent implements OnInit {

  hide:boolean = true;
  registraForm : FormGroup;
  utente:Utente;

  constructor( private fb: FormBuilder, private router: Router, private registraService: ProfiloService) { 
    this.registraForm=this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
    });
  }

  ngOnInit(): void {
  }

  registrazione(){
    this.utente=this.registraForm.value;
    if(this.registraService.registraUtente(this.utente)){
      this.router.navigateByUrl("/login");
    }

  }

}
