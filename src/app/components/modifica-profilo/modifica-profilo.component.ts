import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Utente } from 'src/app/models/utente';
import { ProfiloService } from 'src/app/services/profilo.service';

@Component({
  selector: 'app-modifica-profilo',
  templateUrl: './modifica-profilo.component.html',
  styleUrls: ['./modifica-profilo.component.scss']
})
export class ModificaProfiloComponent implements OnInit {

  @Output()
  profilo:EventEmitter<Utente>=new EventEmitter();

  profiloForm: FormGroup;
  utente:Utente;

  constructor(private router: Router, private fb:FormBuilder, private listaRegistrati: ProfiloService) { 
    this.profiloForm=this.fb.group({
      nome: ['', Validators.required],
      cognome: ['', Validators.required],
      sesso: ['', Validators.required],
      email: ['',Validators.compose([Validators.required, Validators.email])],
      telefono: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.utente=this.listaRegistrati.getUtente(sessionStorage.getItem('user'));
    this.profiloForm.reset(this.utente);
  }

  annulla(){
    this.router.navigateByUrl("/profilo");
  }

  modifica(){
    this.profilo.emit(this.profiloForm.value)
    let profiloModificato:Utente;
    profiloModificato=this.profiloForm.value
    this.listaRegistrati.modificaUtente(profiloModificato);
    this.router.navigateByUrl("/profilo");
  }

}
