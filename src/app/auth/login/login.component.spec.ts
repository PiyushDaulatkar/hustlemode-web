import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('TestComponent', () => {
  let component: LoginComponent;

  beforeEach(() => {
    component = new LoginComponent();
  });

  it('should return even low code', () => {
    expect(component.checkStatus(10)).toBe('Even low code');
  });

  it('should calculate discounted price', () => {
    expect(component.calculatePrice(1200)).toBe(1080);
  });

  it('should apply discount', () => {
    expect(component.applyDiscount(1200)).toBe(1080);
  });
})
