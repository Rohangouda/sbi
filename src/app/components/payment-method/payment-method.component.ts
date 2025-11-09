import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { IDropdownSettings, NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { OutwardFormComponent } from '../outward-form/outward-form.component';

@Component({
  selector: 'app-payment-method',
  standalone:true,
imports:[NgMultiSelectDropDownModule, FormsModule,CommonModule,MatCardModule,OutwardFormComponent,ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDividerModule],
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.css']
})
export class PaymentMethodComponent {
@Output() proceed = new EventEmitter<string[]>();

  dropdownList: { item_id: number; item_text: string }[] = [];
  selectedItems: { item_id: number; item_text: string }[] = [];
  dropdownSettings: IDropdownSettings = {};

  ngOnInit(): void {
    this.dropdownList = [
      { item_id: 1, item_text: 'Account to Account' },
      { item_id: 2, item_text: 'Account to Cash' },
      { item_id: 3, item_text: 'Cash to Cash' },
      { item_id: 4, item_text: 'Account to FTC' },
      { item_id: 5, item_text: 'Account to FNSB Account' }
    ];

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'Unselect All',
      enableCheckAll: false,
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

  onItemSelect(item: any) {
    console.log('Selected:', item);
  }

  onItemDeSelect(item: any) {
    console.log('Deselected:', item);
  }

  onSelectAll(items: any) {
    console.log('Select all:', items);
  }

  doProceed() {
    if (this.selectedItems.length === 0) {
      alert('Please select at least one transaction type.');
      return;
    }

    const selectedNames = this.selectedItems.map(i => i.item_text);
    console.log('Proceed with:', selectedNames);
    this.proceed.emit(selectedNames);
  }
}