import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-trip-photo',
  imports: [],
  templateUrl: './trip-photo.component.html',
  styleUrl: './trip-photo.component.css'
})
export class TripPhotoComponent {
  selectedYear!: string;
    
  @Input()
  set year(year: string) {
      this.selectedYear = year;
  }
}
