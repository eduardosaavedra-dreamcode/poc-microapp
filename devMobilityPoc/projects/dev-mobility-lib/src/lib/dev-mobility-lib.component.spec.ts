import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevMobilityLibComponent } from './dev-mobility-lib.component';

describe('DevMobilityLibComponent', () => {
  let component: DevMobilityLibComponent;
  let fixture: ComponentFixture<DevMobilityLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevMobilityLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevMobilityLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
