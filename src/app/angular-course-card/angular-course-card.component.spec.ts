import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularCourseCardComponent } from './angular-course-card.component';

describe('AngularCourseCardComponent', () => {
  let component: AngularCourseCardComponent;
  let fixture: ComponentFixture<AngularCourseCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularCourseCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AngularCourseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
