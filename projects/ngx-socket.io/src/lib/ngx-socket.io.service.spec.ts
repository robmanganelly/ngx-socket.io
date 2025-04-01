import { TestBed } from '@angular/core/testing';

import { NgxSocketIoService } from './ngx-socket.io.service';

describe('NgxSocketIoService', () => {
  let service: NgxSocketIoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxSocketIoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
