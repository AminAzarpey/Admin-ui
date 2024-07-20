import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicBreadcrumbComponent } from './basic-breadcrumb.component';

describe('BreadcrumbComponent', () => {
  let component: BasicBreadcrumbComponent;
  let fixture: ComponentFixture<BasicBreadcrumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicBreadcrumbComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BasicBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
