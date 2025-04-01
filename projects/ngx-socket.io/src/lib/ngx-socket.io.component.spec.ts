import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSocketIoComponent } from './ngx-socket.io.component';

describe('NgxSocketIoComponent', () => {
  let component: NgxSocketIoComponent;
  let fixture: ComponentFixture<NgxSocketIoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxSocketIoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxSocketIoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
