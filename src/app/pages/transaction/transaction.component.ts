import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule, IDropdownSettings } from 'ng-multiselect-dropdown';
import { AccountingtypeComponent } from '../../components/accountingtype/accountingtype.component';
import { FormComponent } from '../../components/form/form.component';

@Component({
  selector: 'app-transaction',
  standalone: true,
  imports: [CommonModule, FormsModule, NgMultiSelectDropDownModule, AccountingtypeComponent,InwardFormComponent,OutwardFormComponent, FormComponent, CustomerComponent, FormsModule,PaymentMethodComponent,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDividerModule],
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent {
   selectedType: 'buy' | 'sell' | null = null;
  cifNumber = '';
  showCustomerInfoButton = false;
  showPaymentMethod = false;
  paymentProceed = false;
  showForm = false;

  onTypeSelected(type: 'buy' | 'sell') {
    this.selectedType = type;
    this.showCustomerInfoButton = false;
    this.showPaymentMethod = false;
    this.showForm = false;
    this.paymentProceed = false;
  }

  onFetchCif() {
    if (this.cifNumber.trim()) {
      this.showCustomerInfoButton = true;
      if (this.selectedType === 'sell') {
        this.showPaymentMethod = true;
      } else {
        this.showForm = true;
      }
    }
  }

  openCustomerDialog() {
    console.log('Customer info dialog will open.');
  }

  onPaymentProceed(event: any) {
    console.log('Payment Proceeded:', event);
    this.paymentProceed = true;
  }
}
