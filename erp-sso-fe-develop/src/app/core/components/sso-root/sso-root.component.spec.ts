import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsoRootComponent } from './sso-root.component';

describe('SsoRootComponent', () => {
  let component: SsoRootComponent;
  let fixture: ComponentFixture<SsoRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SsoRootComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SsoRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
