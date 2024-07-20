import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthSignUpFormComponent } from './auth-sign-up-form.component';

describe('AuthSignUpFormComponent', () => {
  let component: AuthSignUpFormComponent;
  let fixture: ComponentFixture<AuthSignUpFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthSignUpFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthSignUpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
