import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclesReturnPagePage } from './vehicles-return-page.page';

describe('VehiclesReturnPagePage', () => {
  let component: VehiclesReturnPagePage;
  let fixture: ComponentFixture<VehiclesReturnPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiclesReturnPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclesReturnPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
