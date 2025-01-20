import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-trip-route',
  imports: [],
  templateUrl: './trip-route.component.html',
  styleUrl: './trip-route.component.css'
})
export class TripRouteComponent {
  selectedYear!: string;
    
  @Input()
  set year(year: string) {
      this.selectedYear = year;
  }
}
