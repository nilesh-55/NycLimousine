import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPassengersPage } from './my-passengers.page';

describe('MyPassengersPage', () => {
  let component: MyPassengersPage;
  let fixture: ComponentFixture<MyPassengersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPassengersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPassengersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
