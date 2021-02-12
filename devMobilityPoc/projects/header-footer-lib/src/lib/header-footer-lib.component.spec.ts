import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderFooterLibComponent } from './header-footer-lib.component';

describe('HeaderFooterLibComponent', () => {
  let component: HeaderFooterLibComponent;
  let fixture: ComponentFixture<HeaderFooterLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderFooterLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderFooterLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
