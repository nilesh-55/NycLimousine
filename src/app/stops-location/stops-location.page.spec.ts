import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StopsLocationPage } from './stops-location.page';

describe('StopsLocationPage', () => {
  let component: StopsLocationPage;
  let fixture: ComponentFixture<StopsLocationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StopsLocationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StopsLocationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
