import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateqrComponent } from './generateqr.component';

describe('GenerateqrComponent', () => {
  let component: GenerateqrComponent;
  let fixture: ComponentFixture<GenerateqrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerateqrComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenerateqrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
