import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewdetailsPage } from './reviewdetails.page';

describe('ReviewdetailsPage', () => {
  let component: ReviewdetailsPage;
  let fixture: ComponentFixture<ReviewdetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewdetailsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewdetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
