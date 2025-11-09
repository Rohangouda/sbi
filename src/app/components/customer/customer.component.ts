import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { PaymentMethodComponent } from '../payment-method/payment-method.component';
import { FormComponent } from '../form/form.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CustomerBoxComponent } from '../dialog/customer-box/customer-box.component';
interface AccountItem { id: string; label: string; balance: number; branch: string; type: string; }
@Component({
  selector: 'app-customer',
  standalone:true,
  imports:[CommonModule,PaymentMethodComponent,FormComponent,FormsModule,MatCardModule,MatDialogModule,ReactiveFormsModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatButtonModule,
      MatDividerModule],
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
 @Input() mode: 'buy' | 'sell' | null = null;
  @Output() customerFetched = new EventEmitter<any>();

  form: FormGroup;
  fetched = false;
  customer: any = null;

  accounts = [
    { id: 'A001', label: 'Savings - A001', balance: 125000, branch: 'Mumbai' },
    { id: 'A002', label: 'Current - A002', balance: 78000, branch: 'Pune' }
  ];
  ftc = [{ id: 'F1', label: 'FTC-USD', balance: 5000 }];
  fcnc = [{ id: 'C1', label: 'FCNB-USD', balance: 2000 }];

  selectedAccount: any = null;
  selectedFtc: any = null;
  selectedFcnc: any = null;

  constructor(private fb: FormBuilder,private dialog: MatDialog) {
    this.form = this.fb.group({
      cif: ['', Validators.required]
    });
  }

  fetchCustomer() {
    if (this.form.invalid) return;
    this.customer = { name: 'Rohan Sharma', cif: this.form.value.cif, email: 'rohan@example.com' };
    this.fetched = true;
    this.customerFetched.emit(this.customer);
  }

  mockTxs() {
    return Array.from({ length: 20 }).map((_, i) => ({
      date: `2025-11-${(i % 30) + 1}`,
      amount: (Math.random() * 1000).toFixed(2)
    }));
  }

  onSelectAccount(type: 'account' | 'ftc' | 'fcnc', id: string) {
    if (type === 'account') this.selectedAccount = this.accounts.find(a => a.id === id) ?? null;
    if (type === 'ftc') this.selectedFtc = this.ftc.find(a => a.id === id) ?? null;
    if (type === 'fcnc') this.selectedFcnc = this.fcnc.find(a => a.id === id) ?? null;
  }
  openCustomerInfo() {
    alert("test")
  this.dialog.open(CustomerBoxComponent, {
    width: '900px',
    data: {
      customer: {
        name: 'John Doe',
        id: 'CUST123',
        email: 'john@example.com',
        phone: '9876543210',
        transactions: [
          { date: '2025-11-01', type: 'Credit', amount: 5000 },
          { date: '2025-11-02', type: 'Debit', amount: 2500 },
          { date: '2025-11-03', type: 'Credit', amount: 7000 },
          { date: '2025-11-04', type: 'Debit', amount: 3200 },
          { date: '2025-11-05', type: 'Credit', amount: 1500 }
        ]
      }
    }
  });
}
}