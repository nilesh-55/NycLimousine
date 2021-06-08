import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalpagePage } from './legalpage.page';

describe('LegalpagePage', () => {
  let component: LegalpagePage;
  let fixture: ComponentFixture<LegalpagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegalpagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
