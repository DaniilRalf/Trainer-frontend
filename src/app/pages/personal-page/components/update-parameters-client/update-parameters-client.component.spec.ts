import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateParametersClientComponent } from './update-parameters-client.component';

describe('UpdateParametersClientComponent', () => {
  let component: UpdateParametersClientComponent;
  let fixture: ComponentFixture<UpdateParametersClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateParametersClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateParametersClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
