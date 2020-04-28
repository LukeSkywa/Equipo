import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utente } from 'src/app/models/utente';
import { ProfiloService } from 'src/app/services/profilo.service';

@Component({
  selector: 'app-profilo',
  templateUrl: './profilo.component.html',
  styleUrls: ['./profilo.component.scss']
})
export class ProfiloComponent implements OnInit {

  utente: Utente;

  constructor(private router: Router, private listaRegistrati: ProfiloService) {

  }

  ngOnInit(): void {
    this.utente = this.listaRegistrati.getUtente(sessionStorage.getItem('user'));
  }

  faiModifica() {
    this.router.navigateByUrl("/modifica-profilo");
  }

}
