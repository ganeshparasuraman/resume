import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceTlComponent } from './experience-tl.component';

describe('ExperienceTlComponent', () => {
  let component: ExperienceTlComponent;
  let fixture: ComponentFixture<ExperienceTlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceTlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceTlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
