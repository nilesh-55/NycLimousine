import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPassengerPage } from './add-passenger.page';

describe('AddPassengerPage', () => {
  let component: AddPassengerPage;
  let fixture: ComponentFixture<AddPassengerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPassengerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPassengerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
