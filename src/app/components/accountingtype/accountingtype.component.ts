import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

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
}
