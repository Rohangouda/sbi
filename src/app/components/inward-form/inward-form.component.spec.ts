import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InwardFormComponent } from './inward-form.component';

describe('InwardFormComponent', () => {
  let component: InwardFormComponent;
  let fixture: ComponentFixture<InwardFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InwardFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InwardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
