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
      immagine: "Egitto.jpg",
      immagineVert: "Egitto.jpg",
      localita: "Egitto",
      soggiorno: "Una camera per due adulti",
      durata: "7 notti",
      sistemazione: "Camera doppia standard",
      trattamento: "Pensione completa",
      descrizione: "È la “terra del sole” per antonomasia, un Paese dalla storia che si perde nell’alba dei tempi e che ha affascinato i viaggiatori di ogni epoca. Bagnato a est dal Mar Rosso e a nord dal Mediterraneo, l’Egitto è stato la culla della civiltà egizia, una delle più antiche, complesse e affascinanti del mondo. Segno tangibile di questa grandezza sono le piramidi, la sfinge, le rovine dell’epoca faraonica di città come Il Cairo e Luxor e gli innumerevoli reperti e racconti che sono arrivati fino ai giorni nostri. Fulcro dello sviluppo del Paese è stato il Nilo, fiume che nell’antichità dava il nome al Paese: “terra nera”, alludendo al limo, terreno fertile depositato dalle acque del fiume. E proprio il Nilo è uno dei modi migliori per visitare l’Egitto, percorrendo il suo corso, uno dei più lunghi al mondo, su una delle molte navi da crociera. Sfilano così davanti agli occhi dei turisti la Valle dei Re, il tempio di Luxor, la Grande Diga di Assuan e il Tempio di Edfu, dedicato ad Horus.",
      voto: 8,
      prezzo: 250,
      preferito: false,
      nascosto: false
    },
    {
      id: 2,
      immagine: "Usa.jpg",
      immagineVert: "Usa.jpg",
      localita: "USA",
      soggiorno: "Una camera per un adulti",
      durata: "2 notti",
      sistemazione: "Camera singola standard",
      trattamento: "Mezza pensione",
      descrizione:"Gli Stati Uniti sono il quarto paese più esteso al mondo e il terzo più popolato. Sono il Nuovo Continente, scoperto da Cristoforo Colombo il 12 ottobre 1492. Terra promessa per molti europei e nuova speranza per molte generazioni in cerca di una vita migliore. Paese delle grandi opportunità e primo Stato democratico in assoluto, con la prima costituzione al mondo, dopo aver trascorso periodi con eventi storici cruenti, che videro guerre, la repressione degli Indiani d’America e le discriminazioni razziali, oggi, gli Stati Uniti, sono uno dei Paesi più liberali al mondo e con la maggior diversità etnica e multiculturale, consegueuza di un’immigrazione durata secoli. Ma la prima cosa che stupisce i visitatori è la vastità dei suoi spazi: montagne maestose, laghi grandi come mari, fiumi lunghissimi, enormi parchi nazionali dalla bellezza selvaggia, città interminabili e ampie pianure con distanze quasi improbabili se percorse via terra. ",
      voto: 5,
      prezzo: 100,
      preferito: false,
      nascosto: false
    },
    {
      id: 3,
      immagine: "Roma.jpg",
      immagineVert: "Roma.jpg",
      localita: "Italia",
      soggiorno: "Una camera per due adulti",
      durata: "7 notti",
      sistemazione: "Camera doppia standard",
      trattamento: "Pensione completa",
      descrizione:"L’Italia è conosciuta anche con il nome di “Bel Paese”. Con le sue opere d’arte e monumenti di altissimo valore artistico è un vero e proprio museo a cielo aperto, fonte di ricordi indimenticabili per tutti coloro che la visitano. C’è tantissimo da godere, dalle città d’arte più famose ai numerosi paesetti spesso poco noti ma bellissimi, dalle spiagge ai luoghi di campagna, alle regioni montuose e alle zone lacustri. Visitare il Paese significa non solo entrare in contatto con il suo passato, ma anche vivere il presente di una varietà infinita di culture, dialetti, gastronomie, di tradizioni ora simili ora molto differenti l’una dall’altra, ma accomunate dalla loro appartenenza a questa terra meravigliosa ed unica.",
      voto: 8,
      prezzo: 250,
      preferito: false,
      nascosto: false
    },
    {
      id: 4,
      immagine: "Spagna.jpg",
      immagineVert: "Spagna.jpg",
      localita: "Spagna",
      soggiorno: "Una camera per due adulti",
      durata: "7 notti",
      sistemazione: "Camera doppia standard",
      trattamento: "Pensione completa",
      descrizione:"Solare e vitale, con molti tratti in comune con il nostro paese, la Spagna è uno dei paesi più amati dai turisti italiani, che ne apprezzano la buona cucina, il clima e la simpatia degli abitanti. È il momento di conoscerla più in profondità, penetrare nella sua anima più autentica e scoprire la varietà di attrazioni paesaggistiche e culturali delle regioni che la compongono. Per una settimana di mare, per una fuga romantica, per un city break a tutta cultura, per notti folli che durano fino a mattina, per camminate da centinaia di chilometri… la Spagna è sempre la meta giusta per la vacanza dei sogni!",
      voto: 8,
      prezzo: 250,
      preferito: false,
      nascosto: false
    },
    {
      id: 5,
      immagine: "Portogallo.jpg",
      immagineVert: "Portogallo.jpg",
      localita: "Portogallo",
      soggiorno: "Una camera per due adulti",
      durata: "7 notti",
      sistemazione: "Camera doppia standard",
      trattamento: "Pensione completa",
      descrizione:"Il Portogallo si è aggiudicato il premio come migliore destinazione turistica in Europa ai World Travel Awards, i premi più prestigiosi legati al turismo.La diversità dei paesaggi, la facilità di viaggiare all’interno del Paese e l’accoglienza dei portoghesi sono stati i fattori che hanno fatto sì che il Portogallo venisse eletto migliore destinazione quest’anno.Il Portogallo è stato anche il Paese che ha ricevuto più premi durante un recente evento a San Pietroburgo con ben 37 riconoscimenti che vanno dalla migliore destinazione balneare in Europa (Algarve) alla migliore destinazione con isole (Madeira) fino al miglior porto di crociera (Lisbona). Anche l’Ente ufficiale del Turismo è stato definito il migliore europeo.",
      voto: 8,
      prezzo: 250,
      preferito: false,
      nascosto: false
    },
    {
      id: 6,
      immagine: "Brasile.jpg",
      immagineVert: "Brasile.jpg",
      localita: "Brasile",
      soggiorno: "Una camera per due adulti",
      durata: "7 notti",
      sistemazione: "Camera doppia standard",
      trattamento: "Pensione completa",
      descrizione:"Il Brasile è il paese della natura prodigiosa, delle spiagge dove a dune di sabbia si alternano falesie, delle grandi città dai ritmi e colori irresistibili, delle diversità culturali unite ad un inguaribile spirito di libertà ed allegria. Il suo cuore verde, la Foresta Amazzonica, è considerata la più grande foresta equatoriale del pianeta e il suo cuore eccentrico, Rio de Janeiro, è una delle metropoli più affascinanti del mondo. E' un Paese universalmente riconosciuto come tra i più belli da visitare, il gigante buono del Sud America nonché il quinto paese più grande del mondo. Dalla costa all'entroterra, un abbagliante caleidoscopio di attrattive restituisce tutto il fascino della ricca biodiversità brasiliana.",
      voto: 8,
      prezzo: 250,
      preferito: false,
      nascosto: false
    },
    {
      id: 7,
      immagine: "Cina.jpg",
      immagineVert: "Cina.jpg",
      localita: "Cina",
      soggiorno: "Una camera per due adulti",
      durata: "7 notti",
      sistemazione: "Camera doppia standard",
      trattamento: "Pensione completa",
      descrizione:"immaginabili solo pochi anni prima. Le d... Ritratto in breve Negli ultimi decenni la Cina ha visto veloci e radicali cambiamenti, che non sarebbero stati nemmeno lontanamente immaginabili solo pochi anni prima. Le donne e gli uomini non si vestono più tutti uguali, con le tute o le casacche blu; alle biciclette (che continuano a essere comunque tantissime) si è aggiunto il traffico automobilistico caotico e folle, i negozi poveri e spogli sono diventati centri commerciali con beni di lusso; la comunicazione con gli stranieri (prima impossibile) è migliorata per la diffusione dell’inglese; le case tradizionali a cortile sono state sostituite da miriadi di grattacieli. Ma fare un viaggio in Cina è sempre una grande esperienza di vita, fra templi, pagode, monumenti e parchi, città moderne, affollate, trafficate, in veloce cambiamento. La Cina è, per dimensioni, il terzo paese del mondo.",
      voto: 8,
      prezzo: 250,
      preferito: false,
      nascosto: false
    },
    {
      id: 8,
      immagine: "Grecia.jpg",
      immagineVert: "Grecia.jpg",
      localita: "Grecia",
      soggiorno: "Una camera per due adulti",
      durata: "7 notti",
      sistemazione: "Camera doppia standard",
      trattamento: "Pensione completa",
      descrizione:"La Grecia è formata da una penisola frastagliata che si dirada nel mare, rompendosi in circa 1500 isole, di cui solo 169 abitate. Le isole sono suddivise negli arcipelaghi delle Cicladi, delle Ionie, del Dodecaneso, dell’Egeo nord-orientale, delle Sporadi e del Golfo Saronico, di fronte alla capitale. Le due isole maggiori sono Creta ed Eubea. Il Paese è la culla della civiltà occidentale, patria di poeti e filosofi dai nomi noti: Omero, Esiodo, Sofocle, Eschilo, Platone e Aristotele. Storia e cultura, dunque, ma soprattutto sole e mare. Ogni isola ha qualcosa di unico e originale che la contraddistingue dall’isola più vicina, comun denominatore sono però le case bianche che si stagliano sul blu delle cupole delle chiese, arroccate sul punto più alto della chora. Le spiagge, lambite da acque cristalline, cambiano di colore a seconda della conformazione dell’isola: da quelle di sabbia bianchissima, a quelle nere di origine vulcanica.",
      voto: 8,
      prezzo: 250,
      preferito: false,
      nascosto: false
    },
    {
      id: 9,
      immagine: "Albania.jpg",
      immagineVert: "Albania.jpg",
      localita: "Albania",
      soggiorno: "Una camera per due adulti",
      durata: "7 notti",
      sistemazione: "Camera doppia standard",
      trattamento: "Pensione completa",
      descrizione:"Se avete scelto la nave per raggiungere l’Albania (ci sono traghetti da Trieste, Ancona, Bari e Brindisi), allora approderete a Durazzo. Dal mare non sembra un granché, invece questa antica città, nella quale sorgono alcune interessanti vestigia romane e bizantine, ha un indiscutibile fascino, è popolata di gente cordiale ed è piena di ottimi ristoranti di pesce come il Ristorante Aragosta. Le stratificazioni delle epoche passate vi porteranno a passare in rassegna mosaici antichi ed edifici anni venti, terme bizantine e anfiteatri greci, moschee e condomini di cemento… tutto in un divertente disordine. E poi ci sono le la spiagge, Plazhi i Currilave è vicina, quasi in centro città, Tirana è a un tiro di schioppo, a nord la magnifica natura di Capo Rodoni vi aspetta e a sud, nei pressi di Fier, si trovano gli antichi siti archeologici di Apollonia e di Byllis. La costa adriatica dell’Albania è bassa e sabbiosa e, come più a nord, ricamata da zone paludose e lagune dove nidificano centinaia di uccelli.",
      voto: 8,
      prezzo: 250,
      preferito: false,
      nascosto: false
    },
    {
      id: 10,
      immagine: "Senegal.jpg",
      immagineVert: "Senegal.jpg",
      localita: "Senegal",
      soggiorno: "Una camera per due adulti",
      durata: "7 notti",
      sistemazione: "Camera doppia standard",
      trattamento: "Pensione completa",
      descrizione:"Il Senegal è sicuramente un Paese complesso ma allo stesso molto suggestivo, situato nella costa occidentale dell’Africa, tra la Guinea-Bissau, la Mauritania e il Mali. Oltre alla capitale Dakar, nell’arcipelago di Capo Verde, sono da vedere le zone naturalistiche, come il parco nazionale di Niokolo-Koba e il santuario nazionale degli uccelli di Djoudj, senza tralasciare l’isola di Gorée e il suggestivo lake Retba, il lago rosa. Un viaggio in Senegal è un’esperienza unica alla scoperta della cultura senegalese, tra religione, cucina tipica, natura, spiagge e metropoli in forte sviluppo.",
      voto: 8,
      prezzo: 250,
      preferito: false,
      nascosto: false
    },
    {
      id: 11,
      immagine: "Turchia.jpg",
      immagineVert: "Turchia.jpg",
      localita: "Turchia",
      soggiorno: "Una camera per due adulti",
      durata: "3 notti",
      sistemazione: "Camera doppia standard",
      trattamento: "Pensione completa",
      descrizione:"Un'esclusiva selezione di Tour Turchia 2020 e Viaggi in Turchia alla scoperta di questa terra di tradizioni, millenarie, punto di incontro tra Oriente ed Occidente. La Turchia è al centro della nostra storia fin dalle origini. I colorati bazar e l’eco dei minareti di Istanbul, il magico mondo della Cappadocia caratterizzato da paesaggi unici, storia e natura si fondono creando un luogo unico.",
      voto: 9,
      prezzo: 100,
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
  
  getViaggio(idViaggio: number){
    for(let i=0;i<this.list.length;i++)
    {
      if(this.list[i].id===idViaggio)
      {
        return this.list[i];
      }
    }
    for(let i=0;i<this.viaggiNascosti.length;i++)
    {
      if(this.viaggiNascosti[i].id===idViaggio)
      {
        return this.viaggiNascosti[i];
      }
    }
  }
}
