import { Component, Input } from '@angular/core';
import { WeatherApiResponse } from '../types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info-box.component.html',
  styleUrl: './info-box.component.css'
})
export class InfoBoxComponent {
  @Input() data!: WeatherApiResponse;
}
