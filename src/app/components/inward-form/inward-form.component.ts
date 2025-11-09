import { CommonModule, JsonPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCard } from '@angular/material/card';
import { MatTableDataSource } from '@angular/material/table';
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatOption } from "@angular/material/core";
import { MatRadioButton } from "@angular/material/radio";
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
@Component({
  selector: 'app-inward-form',
  standalone: true,
  imports: [JsonPipe, CommonModule,MatIconModule, FormsModule, MatCard, MatFormField, MatLabel, MatOption, MatRadioButton,  MatTableModule,
    MatCheckboxModule,
    MatButtonModule,
    MatCardModule,
    MatRadioModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule],
  templateUrl: './inward-form.component.html',
  styleUrl: './inward-form.component.css'
})
export class InwardFormComponent {@Input() customer: any;
  step = 1;
  completedSteps = new Set<number>();

  steps = [
    { num: 1, label: '1. Incoming Messages' },
    { num: 2, label: '2. Account Select' },
    { num: 3, label: '3. Review' }
  ];

  messages = Array.from({ length: 8 }).map((_, i) => ({
    id: i + 1,
    date: `2025-11-${i + 1}`,
    amountUSD: Math.round(Math.random() * 1000)
  }));
  dataSource = new MatTableDataSource(this.messages);
  columns = ['select', 'id', 'date', 'usd'];

  selectedIds = new Set<number>();
  rateType = '';
  exchangeRate = 88.5;
  selectedAccount = '';

  accounts = [
    { id: 'A001', label: 'Savings - A001', balance: 125000 },
    { id: 'A002', label: 'Current - A002', balance: 78000 }
  ];

  toggleMsg(id: number) {
    this.selectedIds.has(id) ? this.selectedIds.delete(id) : this.selectedIds.add(id);
  }

  selectedMessages() {
    return this.messages.filter(m => this.selectedIds.has(m.id));
  }

  fetchRate() {
    this.exchangeRate = +(88 + Math.random()).toFixed(2);
  }

  next() {
    this.completedSteps.add(this.step);
    if (this.step < 3) this.step++;
  }

  prev() {
    if (this.step > 1) this.step--;
  }

  goToStep(num: number) {
    // only allow going to completed or current steps
    if (this.completedSteps.has(num) || num === this.step) {
      this.step = num;
    }
  }

  reviewTotals() {
    const usdSum = Array.from(this.selectedIds).reduce(
      (s, n) => s + (this.messages.find(m => m.id === n)?.amountUSD || 0),
      0
    );
    const gstINR = Math.round(usdSum * this.exchangeRate * 0.18);
    const chargesINR = 100;
    const total = Math.round(usdSum * this.exchangeRate) + gstINR + chargesINR;
    return { usdSum, exchangeRate: this.exchangeRate, gstINR, chargesINR, total };
  }

  submit() {
    this.completedSteps.add(this.step);
    alert('Inward submitted: ' + JSON.stringify(this.reviewTotals()));
  }
}
