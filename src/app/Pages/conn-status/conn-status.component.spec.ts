import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnStatusComponent } from './conn-status.component';

describe('ConnStatusComponent', () => {
  let component: ConnStatusComponent;
  let fixture: ComponentFixture<ConnStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
