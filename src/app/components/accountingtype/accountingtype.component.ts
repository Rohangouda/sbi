import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { CustomerComponent } from '../customer/customer.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-accountingtype',
  standalone: true,
  imports: [CommonModule, CustomerComponent,MatCardModule,MatCard,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatButtonModule,
      MatDividerModule],
  templateUrl: './accountingtype.component.html',
  styleUrl: './accountingtype.component.css'
})
export class AccountingtypeComponent {
   @Output() typeSelected = new EventEmitter<'buy' | 'sell'>();
  selectedType: 'buy' | 'sell' | null = null;

  selectType(type: 'buy' | 'sell') {
    this.selectedType = type;
    this.typeSelected.emit(type);
  }

  // ⭐ EXTRA ADDED CODE BELOW (does NOT affect your original logic)

  // To show selected card title in small preview
  getSelectedLabel(): string {
    if (this.selectedType === 'buy') return 'Buy (Inward)';
    if (this.selectedType === 'sell') return 'Sell (Outward)';
    return '';
  }

  // Reset button logic
  resetSelection() {
    this.selectedType = null;
    this.typeSelected.emit(null as any); 
  }

  // Quick flag for HTML conditions
  hasSelection(): boolean {
    return this.selectedType !== null;
  }
}
