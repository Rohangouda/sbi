import { CommonModule, JsonPipe } from '@angular/common';
import { Component, Input } from '@angular/core';

import {MatRadioModule} from '@angular/material/radio';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCard } from '@angular/material/card';
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatOption } from "@angular/material/core";
import { MatIcon } from "@angular/material/icon";
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { startWith } from 'rxjs/internal/operators/startWith';
import { map, Observable } from 'rxjs';
import { MatSelect } from "@angular/material/select";
@Component({
  selector: 'app-outward-form',
  standalone: true,
  imports: [JsonPipe, CommonModule, FormsModule, MatCard, MatRadioModule, MatFormField, MatLabel, MatOption, MatTabsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule, ReactiveFormsModule, MatIcon, MatSelect],
  templateUrl: './outward-form.component.html',
  styleUrl: './outward-form.component.css'
})
export class OutwardFormComponent {
 /** Stepper */
  // step = 1;
  // steps = [
  //   { number: 1, title: 'Select Account' },
  //   { number: 2, title: 'Transaction Details' },
  //   { number: 3, title: 'Review & Confirm' }
  // ];
  // completedSteps = new Set<number>();

  /** Step 1 - Accounts */
  // accounts = [
  //   { accountNumber: '1234567890', cif: 'CIF001', ifsc: 'SBI000123', branch: 'Mumbai', product: 'Savings', balance: 500000, type: 'Savings' },
  //   { accountNumber: '2234567890', cif: 'CIF002', ifsc: 'SBI000456', branch: 'Delhi', product: 'Current', balance: 750000, type: 'Current' }
  // ];
  // selectedAccount: any = null;
  // accountDetails: any = null;

  // showAccountDetails(acc: any) {
  //   this.accountDetails = acc;
  // }

  // /** Step 2 - Tabs & Transactions */
  // selectedTabIndex = 0;
  // tabs = ['Beneficiary', 'FTC', 'FCNB', 'Cash'];

  // // Beneficiary
  // beneficiary = { acc: '', name: '', branch: '', amt: '' };
  // beneficiaries: any[] = [];

  // // FTC
  // ftc = { card: '', amount: '', currency: '' };
  // ftcEntries: any[] = [];
  // ftcCards = ['FTC001', 'FTC002', 'FTC003'];

  // // FCNB
  // fcnc = { amount: '', currency: '' };
  // fcncEntries: any[] = [];

  // // Cash
  // cash = { amount: '', currency: '' };
  // cashEntries: any[] = [];

  // // Rate
  // rateType = '';
  // calculation: any = null;
  // calculationKeys: string[] = [];

  // /** Navigation */
  // next() {
  //   this.completedSteps.add(this.step);
  //   if (this.step < 3) this.step++;
  // }

  // prev() {
  //   if (this.step > 1) this.step--;
  // }

  // goToStep(stepNum: number) {
  //   this.step = stepNum;
  // }

  // /** Tab selection */
  // selectTab(index: number) {
  //   this.selectedTabIndex = index;
  // }

  // /** Add records */
  // addBeneficiary() {
  //   if (this.beneficiary.acc && this.beneficiary.name && this.beneficiary.amt) {
  //     this.beneficiaries.push({ ...this.beneficiary });
  //     this.beneficiary = { acc: '', name: '', branch: '', amt: '' };
  //   }
  // }

  // addFtc() {
  //   if (this.ftc.card && this.ftc.amount && this.ftc.currency) {
  //     this.ftcEntries.push({ ...this.ftc });
  //     this.ftc = { card: '', amount: '', currency: '' };
  //   }
  // }

  // addFcnc() {
  //   if (this.fcnc.amount && this.fcnc.currency) {
  //     this.fcncEntries.push({ ...this.fcnc });
  //     this.fcnc = { amount: '', currency: '' };
  //   }
  // }

  // addCash() {
  //   if (this.cash.amount && this.cash.currency) {
  //     this.cashEntries.push({ ...this.cash });
  //     this.cash = { amount: '', currency: '' };
  //   }
  // }

  // /** Fetch rate & calculate totals */
  // fetchRate() {
  //   const totalBeneficiary = this.beneficiaries.reduce((a, b) => a + parseFloat(b.amt || 0), 0);
  //   const totalFtc = this.ftcEntries.reduce((a, b) => a + parseFloat(b.amount || 0), 0);
  //   const totalFcnc = this.fcncEntries.reduce((a, b) => a + parseFloat(b.amount || 0), 0);
  //   const totalCash = this.cashEntries.reduce((a, b) => a + parseFloat(b.amount || 0), 0);
  //   const totalAmount = totalBeneficiary + totalFtc + totalFcnc + totalCash;

  //   const rate = this.rateType === 'Dealer' ? 83.1 : this.rateType === 'Card' ? 82.8 : this.rateType === 'Online' ? 83.0 : 82.9;
  //   const converted = totalAmount * rate;

  //   const fee = converted * 0.005;
  //   const gst = converted * 0.03;
  //   const commission = converted * 0.02;
  //   const tcs = converted * 0.01;
  //   const discount = -converted * 0.005;

  //   this.calculation = {
  //     'Bank Transfer Fee': 0,
  //     'Our Fee': fee,
  //     'TCS Tax': tcs,
  //     'GST': gst,
  //     'Volume Discount': discount,
  //     'Commission': commission,
  //     'Total (INR)': converted + fee + gst + commission + tcs + discount
  //   };

  //   this.calculationKeys = Object.keys(this.calculation);
  // }

  // /** Submit step 3 */
  // submit() {
  //   alert('Outward transfer submitted successfully!');
  //   console.log('Submission:', this.calculation);
  // }
    /** Stepper */
  step = 1;
  steps = [
    { num: 1, label: 'Select Account' },
    { num: 2, label: 'Transaction Details' },
    { num: 3, label: 'Review & Confirm' }
  ];
  completedSteps = new Set<number>();

  /** Step 1 - Accounts */
  accounts = [
    { accountNumber: '1234567890', cif: 'CIF001', ifsc: 'SBI000123', branch: 'Mumbai', product: 'Savings', balance: 500000 },
    { accountNumber: '2234567890', cif: 'CIF002', ifsc: 'SBI000456', branch: 'Delhi', product: 'Current', balance: 750000 }
  ];
  selectedAccount: any = null;
  accountDetails: any = null;

  showAccountDetails(acc: any) {
    this.accountDetails = acc;
  }

  /** Step 2 - Transaction Details */
  selectedTabIndex = 0;
  tabs = ['Beneficiary', 'FTC', 'FCNB', 'Cash'];

  // Beneficiary
  beneficiary = { acc: '', name: '', branch: '', amt: '' };
  beneficiaries: any[] = [];

  // FTC
  ftc = { card: '', amount: '', currency: '' };
  ftcEntries: any[] = [];
  ftcCards = ['FTC001', 'FTC002', 'FTC003'];

  // FCNB
  fcnc = { amount: '', currency: '' };
  fcncEntries: any[] = [];

  // Cash
  cash = { amount: '', currency: '' };
  cashEntries: any[] = [];

  /** Currencies with flags */
  currencies = [
    { code: 'USD', name: 'US Dollar', flag: '🇺🇸' },
    { code: 'EUR', name: 'Euro', flag: '🇪🇺' },
    { code: 'INR', name: 'Indian Rupee', flag: '🇮🇳' },
    { code: 'GBP', name: 'British Pound', flag: '🇬🇧' },
    { code: 'JPY', name: 'Japanese Yen', flag: '🇯🇵' }
  ];
  currencyFilter = '';

  get filteredCurrencies() {
    return this.currencies.filter(c =>
      c.code.toLowerCase().includes(this.currencyFilter.toLowerCase()) ||
      c.name.toLowerCase().includes(this.currencyFilter.toLowerCase())
    );
  }

  /** Step 2 - Add entries */
  addBeneficiary() {
    if (this.beneficiary.acc && this.beneficiary.name && this.beneficiary.amt) {
      this.beneficiaries.push({ ...this.beneficiary });
      this.beneficiary = { acc: '', name: '', branch: '', amt: '' };
    }
  }

  addFtc() {
    if (this.ftc.card && this.ftc.amount && this.ftc.currency) {
      this.ftcEntries.push({ ...this.ftc });
      this.ftc = { card: '', amount: '', currency: '' };
    }
  }

  addFcnc() {
    if (this.fcnc.amount && this.fcnc.currency) {
      this.fcncEntries.push({ ...this.fcnc });
      this.fcnc = { amount: '', currency: '' };
    }
  }

  addCash() {
    if (this.cash.amount && this.cash.currency) {
      this.cashEntries.push({ ...this.cash });
      this.cash = { amount: '', currency: '' };
    }
  }

  /** Step 2 - Rate & calculation */
  rateType = '';
  calculation: any = null;

  fetchRate() {
    const totalBeneficiary = this.beneficiaries.reduce((a, b) => a + parseFloat(b.amt || 0), 0);
    const totalFtc = this.ftcEntries.reduce((a, b) => a + parseFloat(b.amount || 0), 0);
    const totalFcnc = this.fcncEntries.reduce((a, b) => a + parseFloat(b.amount || 0), 0);
    const totalCash = this.cashEntries.reduce((a, b) => a + parseFloat(b.amount || 0), 0);
    const totalAmount = totalBeneficiary + totalFtc + totalFcnc + totalCash;

    const rate = this.rateType === 'Dealer' ? 83.1 :
                 this.rateType === 'Card' ? 82.8 :
                 this.rateType === 'Online' ? 83.0 : 82.9;

    const converted = totalAmount * rate;
    const fee = converted * 0.005;
    const gst = converted * 0.03;
    const commission = converted * 0.02;
    const tcs = converted * 0.01;
    const discount = -converted * 0.005;

    this.calculation = {
      'Bank Transfer Fee': 0,
      'Our Fee': fee,
      'TCS Tax': tcs,
      'GST': gst,
      'Volume Discount': discount,
      'Commission': commission,
      'Total (INR)': converted + fee + gst + commission + tcs + discount
    };
  }

  /** Stepper navigation */
  next() { 
    this.completedSteps.add(this.step); 
    if(this.step < 3) this.step++; 
  }

  prev() { 
    if(this.step > 1) this.step--; 
  }

  goToStep(n: number) { this.step = n; }

  /** Step 3 - Submit */
  submit() {
    if (!this.calculation) this.fetchRate();
    alert('Transaction Submitted!\n' + JSON.stringify(this.calculation, null, 2));
  }
}