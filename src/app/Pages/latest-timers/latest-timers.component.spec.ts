import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestTimersComponent } from './latest-timers.component';

describe('LatestTimersComponent', () => {
  let component: LatestTimersComponent;
  let fixture: ComponentFixture<LatestTimersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestTimersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestTimersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
