import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarecalculationsPage } from './farecalculations.page';

describe('FarecalculationsPage', () => {
  let component: FarecalculationsPage;
  let fixture: ComponentFixture<FarecalculationsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarecalculationsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarecalculationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
