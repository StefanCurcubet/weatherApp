import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {

  @Output() submitEvent = new EventEmitter<string>

  inputValue: string = '';

  submitQuerry() {
    if (this.inputValue) {
      this.submitEvent.emit(this.inputValue);
    }
  }
}
