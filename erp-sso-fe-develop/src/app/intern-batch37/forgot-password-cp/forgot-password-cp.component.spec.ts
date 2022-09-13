import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswordCpComponent } from './forgot-password-cp.component';

describe('ForgotPasswordCpComponent', () => {
  let component: ForgotPasswordCpComponent;
  let fixture: ComponentFixture<ForgotPasswordCpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotPasswordCpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgotPasswordCpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
