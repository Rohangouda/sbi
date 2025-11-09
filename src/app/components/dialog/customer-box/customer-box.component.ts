import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogActions, MatDialogContent, MatDialogModule } from '@angular/material/dialog';
import { MatCard } from "@angular/material/card";
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatOption } from "@angular/material/core";
import { MatSelect } from "@angular/material/select";
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-customer-box',
  standalone: true,
  imports: [MatDialogActions, MatCard, MatFormField, MatLabel, MatOption, MatSelect,MatDialogModule, MatDialogContent,FormsModule,MatTableModule],
  templateUrl: './customer-box.component.html',
  styleUrl: './customer-box.component.css'
})
export class CustomerBoxComponent {
 customer: any;
  selectedAccount: any = null;

  accounts = [
    { accountNumber: '1234567890', balance: 500000, branch: 'Mumbai' },
    { accountNumber: '2234567890', balance: 750000, branch: 'Delhi' }
  ];

  ftcCards = ['FTC001', 'FTC002', 'FTC003'];

  constructor(
    public dialogRef: MatDialogRef<CustomerBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.customer = data.customer;
  }
}
