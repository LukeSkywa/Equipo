import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Utente } from '../models/utente';

@Injectable({
  providedIn: 'root'
})
export class ProfiloService {

  private utentiRegistrati: Utente[] = [
    {
      nome:"Luca",
      cognome:"Fumagalli",
      password:"fumagalli",
      sesso:"Maschio",
      email:"lucafu99@gmail.com",
      telefono:"333 444 5555"
    },
    {
      nome:"Alessio",
      cognome:"Facchin",
      password:"facchin",
      sesso:"Maschio",
      email:"facchin810@gmail.com",
      telefono:"444 555 6666"
    },
    {
      nome:"Mor Peinda",
      cognome:"Diop",
      password:"diop",
      sesso:"Maschio",
      email:"mordiop@gmail.com",
      telefono:"222 333 4444"
    },
    {
      nome:"Andrea",
      cognome:"Lo Nivuro",
      password:"lonivuro",
      sesso:"Femmina",
      email:"a.lonivuro@gmail.com",
      telefono:"777 888 9999"
    }
  ]

  constructor(private router: Router) { }

  //Verifica se l'utente è registrato
  isLogin(isUtente: String,isPass: String) {
    for (let i = 0; i < this.utentiRegistrati.length; i++) 
      if (this.utentiRegistrati[i].email === isUtente && this.utentiRegistrati[i].password === isPass ) 
        return true;
      return false
  }

  //fa la login
  eseguiLogin(ut:string, psw:string){
    if(this.isLogin(ut,psw)){
      sessionStorage.setItem('user', ut);
      this.router.navigateByUrl('/home');
    }
    else{
      this.router.navigateByUrl('/login');
    }
  }

  registraUtente(utente: Utente) {
    for (let i = 0; i < this.utentiRegistrati.length; i++) {
      if ( this.utentiRegistrati[i].email === utente.email) {
        return false;
      }
    }
    this.utentiRegistrati.push(utente);
    return true
  }

  getUtente(email:string){
    for(let i = 0; i < this.utentiRegistrati.length; i++){
      if(this.utentiRegistrati[i].email === email)
        return this.utentiRegistrati[i];
    }
  }
}
