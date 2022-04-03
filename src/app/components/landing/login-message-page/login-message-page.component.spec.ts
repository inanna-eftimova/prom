import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginMessagePageComponent } from './login-message-page.component';

describe('LoginMessagePageComponent', () => {
  let component: LoginMessagePageComponent;
  let fixture: ComponentFixture<LoginMessagePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginMessagePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginMessagePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
