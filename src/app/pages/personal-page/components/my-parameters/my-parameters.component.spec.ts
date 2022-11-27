import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyParametersComponent } from './my-parameters.component';

describe('MyParametersComponent', () => {
  let component: MyParametersComponent;
  let fixture: ComponentFixture<MyParametersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyParametersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
