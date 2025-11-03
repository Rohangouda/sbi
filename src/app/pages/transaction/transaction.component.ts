import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule, IDropdownSettings } from 'ng-multiselect-dropdown';
import { AccountingtypeComponent } from '../../components/accountingtype/accountingtype.component';
import { FormComponent } from '../../components/form/form.component';

@Component({
  selector: 'app-transaction',
  standalone: true,
  imports: [CommonModule, FormsModule, NgMultiSelectDropDownModule, AccountingtypeComponent, FormComponent],
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent {
    cifSubmitted = false;
    showForm = false
  selectedType: string = '';
  showAccountInput = false;
  showDropdown = false;
  accountNumber = '';

  dropdownList: any[] = [];
  selectedItems: any[] = [];
  dropdownSettings: IDropdownSettings = {};

  constructor() {
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
      unSelectAllText: 'UnSelect All',
       enableCheckAll: false,
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

  onTypeSelected(type: string) {
    this.selectedType = type;
    this.showAccountInput = type === 'buy';
     this.showForm = type === 'sell';
    this.showDropdown = false;
  }

  submitAccount() {
     this.cifSubmitted = true;
    if (this.accountNumber.trim()) {
      this.showDropdown = true;
    } else {
      alert('Please enter account number');
    }
  }

  onItemSelect(item: any) {
    console.log('Selected:', item);
  }

  onSelectAll(items: any) {
    console.log('All selected:', items);
  }

}
