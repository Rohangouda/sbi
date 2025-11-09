import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutwardFormComponent } from './outward-form.component';

describe('OutwardFormComponent', () => {
  let component: OutwardFormComponent;
  let fixture: ComponentFixture<OutwardFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutwardFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OutwardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
