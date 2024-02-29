import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchBarComponent } from "./search-bar/search-bar.component";
import { ApiService } from './services/api.service';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { WeatherApiResponse } from './types';
import { InfoBoxComponent } from "./info-box/info-box.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ErrorBoxComponent } from './error-box/error-box.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, SearchBarComponent, HttpClientModule, InfoBoxComponent, CommonModule, FormsModule, ErrorBoxComponent]
})
export class AppComponent {
  title : string = 'weatherApp';
  weatherData! : WeatherApiResponse;
  errorMessage: string = '';

  constructor( private apiService: ApiService) {}

  ngOnInit() {
    this.getCity('Targu-Mures')
  }

  getCity(city: string) {
    this.apiService.getData(city).subscribe({
      next: (data) => {
      this.weatherData = data;
      this.errorMessage = '';
    }, 
      error: (error) => {this.errorMessage= error.message}}, 
    )
  }
}
