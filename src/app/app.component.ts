import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule, IDropdownSettings } from 'ng-multiselect-dropdown';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, NgMultiSelectDropDownModule,RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SBI MultiSelect Example';

  dropdownList: any[] = [];
  selectedItems: any[] = [];
  dropdownSettings: IDropdownSettings = {};

  ngOnInit() {
    this.dropdownList = [
      { item_id: 1, item_text: 'Account to Account' },
      { item_id: 2, item_text: 'Account to Cash' },
      { item_id: 3, item_text: 'Cash to Cash' },
      { item_id: 4, item_text: 'Account to FTC' },
      { item_id: 5, item_text: 'Account to FNSB Account' }
    ];

    this.selectedItems = [
      { item_id: 3, item_text: 'Cash to Cash' }
    ];

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

  onItemSelect(item: any) {
    console.log('Selected:', item);
  }

  onSelectAll(items: any) {
    console.log('All Selected:', items);
  }
}
