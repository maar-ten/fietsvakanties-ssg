import { Routes } from '@angular/router';
import { TripComponent } from './trip/trip.component';
import { LandingComponent } from './landing/landing.component';
import { TripPhotoComponent } from './trip-photo/trip-photo.component';
import { TripLogComponent } from './trip-log/trip-log.component';
import { TripRouteComponent } from './trip-route/trip-route.component';

export const routes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'trip/:year', component: TripComponent },
    { path: 'route/:year', component: TripRouteComponent },
    { path: 'log/:year', component: TripLogComponent },
    { path: 'photos/:year', component: TripPhotoComponent },
];
