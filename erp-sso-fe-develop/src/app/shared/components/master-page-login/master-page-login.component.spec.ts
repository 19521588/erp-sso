import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterPageLoginComponent } from './master-page-login.component';

describe('MasterPageLoginComponent', () => {
  let component: MasterPageLoginComponent;
  let fixture: ComponentFixture<MasterPageLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterPageLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterPageLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
