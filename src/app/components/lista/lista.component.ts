import { Component, OnInit } from '@angular/core';
import { Viaggio } from 'src/app/models/viaggio';
import { ListaViaggiService } from 'src/app/services/lista-viaggi.service';
import { SearchViaggioService } from 'src/app/services/search-viaggio.service';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  listaToShow: string = "viaggi";

  inizio: number = 0;
  mostra: number = 5;
  mostraNascosti: number = 5;
  mostraPreferiti: number = 5;
  search:string;

  viaggi: Viaggio[];
  viaggiPreferiti: Viaggio[] = [];
  viaggiNascosti: Viaggio[] = [];
  
  constructor(private lista: ListaViaggiService, private  myService: SearchViaggioService) {
    this.viaggi = this.lista.getListaViaggi();
    this.viaggiNascosti = this.lista.getViaggiNascosti();
    this.viaggiPreferiti = this.lista.getViaggiPreferiti();
    this.myService.messaggio$.subscribe(value=>{
      // filtro la lista in base al value che ricervo
    });
  }
  ngOnInit(): void {
  }
  incrementaContatore() {
    this.mostra += 5;
  }
  incrementaNascosti() {
    this.mostraNascosti += 5;
  }
  incrementaPreferiti() {
    this.mostraPreferiti += 5;
  }

  listaNascostiVuota() {
    return this.viaggiNascosti.length == 0;
  }
  listaPreferitiVuota() {
    return this.viaggiPreferiti.length == 0;
  }
  listaVuota() {
    return this.viaggi.length == 0;
  }
  
  cambiaLista(lista: string) {
    this.listaToShow = lista;
  }

  cambiaPreferito(viaggio: Viaggio) {
    viaggio.preferito = !viaggio.preferito;
    if (viaggio.preferito) {
      this.addViaggioPreferito(viaggio);
      return true;
    } else {
      this.removeViaggioPreferito(viaggio);
      return false;
    }
  }

  cambiaNascosto(viaggio: Viaggio) {
    viaggio.nascosto = !viaggio.nascosto;
    if (viaggio.nascosto) {
      this.addViaggioNascosto(viaggio);
      return true;
    } else {
      this.removeViaggioNascosto(viaggio);
      return false;
    }
  }

  addViaggioPreferito(viaggio: Viaggio) {
    if (!viaggio.nascosto) {
      this.lista.addViaggioPreferito(viaggio);
    }
  }

  removeViaggioPreferito(viaggio: Viaggio) {
    if (!viaggio.nascosto) {
      this.lista.removeViaggioPreferito(viaggio);
    }
  }

  addViaggioNascosto(viaggio: Viaggio) {
    this.lista.addViaggioNascosto(viaggio);
    this.lista.removeViaggio(viaggio);
    if (viaggio.preferito) {
      this.lista.removeViaggioPreferito(viaggio);
    }
  }

  removeViaggioNascosto(viaggio: Viaggio) {
    this.lista.removeViaggioNascosto(viaggio);
    this.lista.addViaggio(viaggio);
    if (viaggio.preferito) {
      this.lista.addViaggioPreferito(viaggio);
    }
  }
}






