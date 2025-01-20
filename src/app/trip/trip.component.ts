import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-trip',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './trip.component.html',
  styleUrl: './trip.component.css'
})
export class TripComponent {
  selectedYear!: string;
    
  @Input()
  set year(year: string) {
      this.selectedYear = year;
  }

}
