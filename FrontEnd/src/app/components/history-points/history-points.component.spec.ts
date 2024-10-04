import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryPointsComponent } from './history-points.component';

describe('HistoryPointsComponent', () => {
  let component: HistoryPointsComponent;
  let fixture: ComponentFixture<HistoryPointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoryPointsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistoryPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
