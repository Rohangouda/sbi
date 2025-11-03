import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-accountingtype',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accountingtype.component.html',
  styleUrl: './accountingtype.component.css'
})
export class AccountingtypeComponent {
 @Output() typeSelected = new EventEmitter<string>();
  selectedCard: string = '';

  selectCard(type: string) {
    this.selectedCard = type;
    this.typeSelected.emit(type);
  }
}
