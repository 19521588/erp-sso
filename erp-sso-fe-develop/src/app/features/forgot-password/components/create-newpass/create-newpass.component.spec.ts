import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewpassComponent } from './create-newpass.component';

describe('CreateNewpassComponent', () => {
  let component: CreateNewpassComponent;
  let fixture: ComponentFixture<CreateNewpassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNewpassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateNewpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
