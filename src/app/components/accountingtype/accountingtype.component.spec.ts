import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingtypeComponent } from './accountingtype.component';

describe('AccountingtypeComponent', () => {
  let component: AccountingtypeComponent;
  let fixture: ComponentFixture<AccountingtypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountingtypeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccountingtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
