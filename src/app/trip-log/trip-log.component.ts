import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-trip-log',
  imports: [],
  templateUrl: './trip-log.component.html',
  styleUrl: './trip-log.component.css'
})
export class TripLogComponent {
  selectedYear!: string;
    
  @Input()
  set year(year: string) {
      this.selectedYear = year;
  }
}
