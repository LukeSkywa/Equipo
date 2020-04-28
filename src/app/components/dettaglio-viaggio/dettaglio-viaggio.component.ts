import { Component, OnInit } from '@angular/core';
import { ListaViaggiService } from 'src/app/services/lista-viaggi.service';
import { Viaggio } from 'src/app/models/viaggio';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dettaglio-viaggio',
  templateUrl: './dettaglio-viaggio.component.html',
  styleUrls: ['./dettaglio-viaggio.component.scss']
})
export class DettaglioViaggioComponent implements OnInit {

  viaggio: Viaggio;
  constructor(private listaViaggi: ListaViaggiService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      if (params.get("id")) {
        this.viaggio = this.listaViaggi.getViaggio(Number(params.get("id")));
      }
    })
  }

}
