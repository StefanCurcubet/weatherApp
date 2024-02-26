import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './error-box.component.html',
  styleUrl: './error-box.component.css'
})
export class ErrorBoxComponent {
 @Input() errorMessage!: string;
}
