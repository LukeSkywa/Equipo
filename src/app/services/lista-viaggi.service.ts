import { Injectable } from '@angular/core';
import { Viaggio } from '../models/viaggio';

@Injectable({
  providedIn: 'root'
})
export class ListaViaggiService {

  constructor() { }
  
  private viaggiPreferiti: Viaggio[] = [];
  private viaggiNascosti: Viaggio[] = [];
  private list: Viaggio[] = [
    {
      id: 1,
      immagine: "egitto.jpg",
      localita: "Egitto",
      soggiorno: "Una camera per due adulti",
      durata: "7 notti",
      sistemazione: "Camera doppia standard",
      trattamento: "Pensione completa",
      descrizione: "wi-fi nella zona lobby, parcheggio,anfiteatro, navetta gratuita 2 volte a settimana, una per Port Ghalib e una per El Quseir (su prenotazione); a pagamento, lavanderia, sala conferenze con capacità massima di 80 persone, negozi di souvenir e servizio medico interno (su richiesta).",
      voto: 8,
      prezzo: 250,
      preferito: false,
      nascosto: false
    },
    {
      id: 2,
      immagine: "Usa.jpg",
      localita: "USA",
      soggiorno: "Una camera per un adulti",
      durata: "2 notti",
      sistemazione: "Camera singola standard",
      trattamento: "Mezza pensione",
      descrizione: "wi-fi nella zona lobby, parcheggio,anfiteatro, navetta gratuita 2 volte a settimana, una per Port Ghalib e una per El Quseir (su prenotazione); a pagamento, lavanderia, sala conferenze con capacità massima di 80 persone, negozi di souvenir e servizio medico interno (su richiesta).",
      voto: 5,
      prezzo: 100,
      preferito: false,
      nascosto: false
    },
    {
      id: 3,
      immagine: "Roma.jpg",
      localita: "Italia",
      soggiorno: "Una camera per due adulti",
      durata: "7 notti",
      sistemazione: "Camera doppia standard",
      trattamento: "Pensione completa",
      descrizione: "wi-fi nella zona lobby, parcheggio,anfiteatro, navetta gratuita 2 volte a settimana, una per Port Ghalib e una per El Quseir (su prenotazione); a pagamento, lavanderia, sala conferenze con capacità massima di 80 persone, negozi di souvenir e servizio medico interno (su richiesta).",
      voto: 8,
      prezzo: 250,
      preferito: false,
      nascosto: false
    },
    {
      id: 4,
      immagine: "Spagna.jpg",
      localita: "Spagna",
      soggiorno: "Una camera per due adulti",
      durata: "7 notti",
      sistemazione: "Camera doppia standard",
      trattamento: "Pensione completa",
      descrizione: "wi-fi nella zona lobby, parcheggio,anfiteatro, navetta gratuita 2 volte a settimana, una per Port Ghalib e una per El Quseir (su prenotazione); a pagamento, lavanderia, sala conferenze con capacità massima di 80 persone, negozi di souvenir e servizio medico interno (su richiesta).",
      voto: 8,
      prezzo: 250,
      preferito: false,
      nascosto: false
    },
    {
      id: 5,
      immagine: "Portogallo.jpg",
      localita: "Portogallo",
      soggiorno: "Una camera per due adulti",
      durata: "7 notti",
      sistemazione: "Camera doppia standard",
      trattamento: "Pensione completa",
      descrizione: "wi-fi nella zona lobby, parcheggio,anfiteatro, navetta gratuita 2 volte a settimana, una per Port Ghalib e una per El Quseir (su prenotazione); a pagamento, lavanderia, sala conferenze con capacità massima di 80 persone, negozi di souvenir e servizio medico interno (su richiesta).",
      voto: 8,
      prezzo: 250,
      preferito: false,
      nascosto: false
    },
    {
      id: 6,
      immagine: "Brasile.jpg",
      localita: "Brasile",
      soggiorno: "Una camera per due adulti",
      durata: "7 notti",
      sistemazione: "Camera doppia standard",
      trattamento: "Pensione completa",
      descrizione: "wi-fi nella zona lobby, parcheggio,anfiteatro, navetta gratuita 2 volte a settimana, una per Port Ghalib e una per El Quseir (su prenotazione); a pagamento, lavanderia, sala conferenze con capacità massima di 80 persone, negozi di souvenir e servizio medico interno (su richiesta).",
      voto: 8,
      prezzo: 250,
      preferito: false,
      nascosto: false
    },
    {
      id: 7,
      immagine: "Cina.jpg",
      localita: "Cina",
      soggiorno: "Una camera per due adulti",
      durata: "7 notti",
      sistemazione: "Camera doppia standard",
      trattamento: "Pensione completa",
      descrizione: "wi-fi nella zona lobby, parcheggio,anfiteatro, navetta gratuita 2 volte a settimana, una per Port Ghalib e una per El Quseir (su prenotazione); a pagamento, lavanderia, sala conferenze con capacità massima di 80 persone, negozi di souvenir e servizio medico interno (su richiesta).",
      voto: 8,
      prezzo: 250,
      preferito: false,
      nascosto: false
    },
    {
      id: 8,
      immagine: "Grecia.jpg",
      localita: "Grecia",
      soggiorno: "Una camera per due adulti",
      durata: "7 notti",
      sistemazione: "Camera doppia standard",
      trattamento: "Pensione completa",
      descrizione: "wi-fi nella zona lobby, parcheggio,anfiteatro, navetta gratuita 2 volte a settimana, una per Port Ghalib e una per El Quseir (su prenotazione); a pagamento, lavanderia, sala conferenze con capacità massima di 80 persone, negozi di souvenir e servizio medico interno (su richiesta).",
      voto: 8,
      prezzo: 250,
      preferito: false,
      nascosto: false
    },
    {
      id: 9,
      immagine: "Albania.jpg",
      localita: "Albania",
      soggiorno: "Una camera per due adulti",
      durata: "7 notti",
      sistemazione: "Camera doppia standard",
      trattamento: "Pensione completa",
      descrizione: "wi-fi nella zona lobby, parcheggio,anfiteatro, navetta gratuita 2 volte a settimana, una per Port Ghalib e una per El Quseir (su prenotazione); a pagamento, lavanderia, sala conferenze con capacità massima di 80 persone, negozi di souvenir e servizio medico interno (su richiesta).",
      voto: 8,
      prezzo: 250,
      preferito: false,
      nascosto: false
    },
    {
      id: 10,
      immagine: "Senegal.jpg",
      localita: "Senegal",
      soggiorno: "Una camera per due adulti",
      durata: "7 notti",
      sistemazione: "Camera doppia standard",
      trattamento: "Pensione completa",
      descrizione: "wi-fi nella zona lobby, parcheggio,anfiteatro, navetta gratuita 2 volte a settimana, una per Port Ghalib e una per El Quseir (su prenotazione); a pagamento, lavanderia, sala conferenze con capacità massima di 80 persone, negozi di souvenir e servizio medico interno (su richiesta).",
      voto: 8,
      prezzo: 250,
      preferito: false,
      nascosto: false
    }
  ];

  getListaViaggi() {
    return this.list;
  }

  getViaggiPreferiti() {
    return this.viaggiPreferiti;
  }

  getViaggiNascosti() {
    return this.viaggiNascosti;
  }

  removeViaggio(viaggio: Viaggio) {
    this.list.splice(this.list.indexOf(viaggio), 1);
  }

  removeViaggioNascosto(viaggio: Viaggio) {
    this.viaggiNascosti.splice(this.viaggiNascosti.indexOf(viaggio), 1);
  }

  removeViaggioPreferito(viaggio: Viaggio) {
    this.viaggiPreferiti.splice(this.viaggiPreferiti.indexOf(viaggio), 1);
  }

  addViaggio(viaggio: Viaggio) {
    this.list.push(viaggio);
  }

  addViaggioNascosto(viaggio: Viaggio) {
    this.viaggiNascosti.push(viaggio);
  }

  addViaggioPreferito(viaggio: Viaggio) {
    this.viaggiPreferiti.push(viaggio);
  }

  getViaggioPreferito(nome:string){
    this.viaggiPreferiti.forEach(element => {
      if(element.localita===nome){
        return element;
      }
    });
    return false;
  }

  getViaggioNascosto(nome:string){
    this.viaggiNascosti.forEach(element => {
      if(element.localita===nome){
        return element;
      }
    });
    return false;
  }
  
  getViaggio(nomeVideoGioco:string){
    for(let i=0;i<this.list.length;i++)
    {
      if(this.list[i].localita===nomeVideoGioco)
      {
        return JSON.parse(JSON.stringify(this.list[i]));;
      }
    }
    for(let i=0;i<this.viaggiNascosti.length;i++)
    {
      if(this.viaggiNascosti[i].localita===nomeVideoGioco)
      {
        return JSON.parse(JSON.stringify(this.viaggiNascosti[i]));;
      }
    }
  }
}
