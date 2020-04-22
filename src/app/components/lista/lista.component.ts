import { Component, OnInit } from '@angular/core';
import { Viaggio } from 'src/app/models/viaggio';
import { ListaViaggiService } from 'src/app/services/lista-viaggi.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  listaToShow: string = "viaggi";
  viaggi: Viaggio[];
  viaggiPreferiti: Viaggio[] = [];
  viaggiNascosti: Viaggio[] = [];
  constructor(private lista: ListaViaggiService) {
    this.viaggi = this.lista.getListaViaggi();
    this.viaggiNascosti = this.lista.getViaggiNascosti();
    this.viaggiPreferiti = this.lista.getViaggiPreferiti();
  }
  ngOnInit(): void {
  }
  /*increaseShow() {
    this.show += 5;
  }
  increaseShowNascosti() {
    this.showNascosti += 5;
  }
  increaseShowPreferiti() {
    this.showPreferiti += 5;
  }

  listaNascostiVuota() {
    return this.videogiochiNascosti.length == 0;
  }
  listaPreferitiVuota() {
    return this.videogiochiPreferiti.length == 0;
  }
  listaVuota() {
    return this.videogiochi.length == 0;
  }*/
  cambiaLista(lista: string) {
    this.listaToShow = lista;
  }
  cambiaPreferito(viaggio: Viaggio) {
    viaggio.preferito = !viaggio.preferito;
    if (viaggio.preferito) {
      this.addViaggioPreferito(viaggio);
      console.log(this.viaggiPreferiti)
      return true;

    } else if (!viaggio.preferito) {
      this.removeViaggioPreferito(viaggio);
      return false;
    }
  }
  cambiaNascosto(viaggio: Viaggio) {
    viaggio.nascosto = !viaggio.nascosto;
    if (viaggio.nascosto) {
      this.addViaggioNascosto(viaggio);
      console.log(this.viaggiNascosti)
      return true;

    } else if (!viaggio.nascosto) {
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
    if (viaggio.preferito == true) {

      this.lista.removeViaggioPreferito(viaggio);
    }
  }
  removeViaggioNascosto(viaggio: Viaggio) {

    this.lista.removeViaggioNascosto(viaggio);


    this.lista.addViaggio(viaggio);

    if (viaggio.preferito == true) {
      this.lista.addViaggioPreferito(viaggio);
    }
  }
  addVideogioco(viaggio: Viaggio) {
    this.lista.addViaggio(viaggio);
  }
  removeViaggio(viaggio: Viaggio) {
    this.lista.removeViaggio(viaggio);
  }

  /*salvaVideogioco(nomeVideoGioco: string) {
    sessionStorage.setItem("videogioco", nomeVideoGioco);
    console.log(this.listaService.getVideogioco(sessionStorage.getItem('videogioco')));
*/
  
  }






