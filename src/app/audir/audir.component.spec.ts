import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudirComponent } from './audir.component';

describe('AudirComponent', () => {
  let component: AudirComponent;
  let fixture: ComponentFixture<AudirComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AudirComponent]
    });
    fixture = TestBed.createComponent(AudirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
