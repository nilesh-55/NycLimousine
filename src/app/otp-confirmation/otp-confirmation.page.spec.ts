import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpConfirmationPage } from './otp-confirmation.page';

describe('OtpConfirmationPage', () => {
  let component: OtpConfirmationPage;
  let fixture: ComponentFixture<OtpConfirmationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtpConfirmationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtpConfirmationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
