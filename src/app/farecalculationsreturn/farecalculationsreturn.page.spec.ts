import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarecalculationsreturnPage } from './farecalculationsreturn.page';

describe('FarecalculationsreturnPage', () => {
  let component: FarecalculationsreturnPage;
  let fixture: ComponentFixture<FarecalculationsreturnPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarecalculationsreturnPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarecalculationsreturnPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
