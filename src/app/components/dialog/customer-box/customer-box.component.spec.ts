import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerBoxComponent } from './customer-box.component';

describe('CustomerBoxComponent', () => {
  let component: CustomerBoxComponent;
  let fixture: ComponentFixture<CustomerBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomerBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
