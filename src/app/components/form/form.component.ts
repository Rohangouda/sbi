import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  currentStep = 1;
  steps = ['Basic Info', 'Bank Details', 'Document Upload', 'Review & Submit'];
  form: FormGroup;
selectedAccount: any = null;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
       accountId: [''],
      firstName: [''],
      lastName: [''],
      rateType: [''],
      usdAmount: [''],
      beneficiary: this.fb.group({
        name: [''],
        bank: [''],
        ifsc: ['']
      })
    });
  }
    selectedTransactionType = '';
    get calculations() {
    const usd = this.form.get('usdAmount')?.value || 0;
    const usdToInr = 84;
    const ftcAmount = usd * usdToInr;
    const accountAmt = 2000;
    const charges = 50;
    const exchCharges = 100;
    const total = ftcAmount + accountAmt + charges + exchCharges;
    return { ftcAmount, accountAmt, charges, exchCharges, total };
  }
 accountList = [
    { id: 'ACC001', name: 'Savings Account', branch: 'Main Branch', balance: 24500.75, type: 'Savings' },
    { id: 'ACC002', name: 'Current Account', branch: 'Industrial Branch', balance: 81200.00, type: 'Current' },
    { id: 'ACC003', name: 'Fixed Deposit', branch: 'City Center', balance: 500000.00, type: 'FD' }
  ];
onTransactionSelect(event: any) {
    this.selectedTransactionType = event.target.value;
  }
    onAccountSelect(event: any) {
    const selectedId = event.target.value;
    this.selectedAccount = this.accountList.find(acc => acc.id === selectedId);
  }
  nextStep() {
    if (this.currentStep < this.steps.length) {
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  submit() {
    console.log(this.form.value);
  }
}
