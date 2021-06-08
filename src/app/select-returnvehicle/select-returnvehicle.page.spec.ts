import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectReturnvehiclePage } from './select-returnvehicle.page';

describe('SelectReturnvehiclePage', () => {
  let component: SelectReturnvehiclePage;
  let fixture: ComponentFixture<SelectReturnvehiclePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectReturnvehiclePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectReturnvehiclePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
