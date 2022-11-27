import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientOnlineComponent } from './client-online.component';

describe('ClientOnlineComponent', () => {
  let component: ClientOnlineComponent;
  let fixture: ComponentFixture<ClientOnlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientOnlineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
