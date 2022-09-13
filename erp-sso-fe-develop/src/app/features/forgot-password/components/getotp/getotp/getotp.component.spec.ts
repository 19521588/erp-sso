import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetotpComponent } from './getotp.component';

describe('GetotpComponent', () => {
  let component: GetotpComponent;
  let fixture: ComponentFixture<GetotpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetotpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetotpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
