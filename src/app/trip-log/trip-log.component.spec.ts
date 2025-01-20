import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripLogComponent } from './trip-log.component';

describe('TripLogComponent', () => {
  let component: TripLogComponent;
  let fixture: ComponentFixture<TripLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TripLogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TripLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
