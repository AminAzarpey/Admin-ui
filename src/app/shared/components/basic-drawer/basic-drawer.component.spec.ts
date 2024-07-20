import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicDrawerComponent } from './basic-drawer.component';

describe('BasicDrawerComponent', () => {
  let component: BasicDrawerComponent;
  let fixture: ComponentFixture<BasicDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicDrawerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BasicDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
