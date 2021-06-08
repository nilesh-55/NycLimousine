import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectvehiclePage } from './selectvehicle.page';

describe('SelectvehiclePage', () => {
  let component: SelectvehiclePage;
  let fixture: ComponentFixture<SelectvehiclePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectvehiclePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectvehiclePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
