import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientOfflineComponent } from './client-offline.component';

describe('ClientOfflineComponent', () => {
  let component: ClientOfflineComponent;
  let fixture: ComponentFixture<ClientOfflineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientOfflineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientOfflineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
