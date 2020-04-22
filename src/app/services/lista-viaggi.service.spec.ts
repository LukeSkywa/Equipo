import { TestBed } from '@angular/core/testing';

import { ListaViaggiService } from './lista-viaggi.service';

describe('ListaViaggiService', () => {
  let service: ListaViaggiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaViaggiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
