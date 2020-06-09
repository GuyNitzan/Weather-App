import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {WeatherState} from './weather.state';
import {Location} from '../global.constants';
import {AddToFavorites, ChangeSelectedLocation, ToggleFavoriteLocationAction} from './weather.actions';

@Injectable()
export class WeatherService {

  constructor(private store: Store<WeatherState>) {}

  // Selectors

  getSelectedLocation(): Observable<Location> {
    return this.store.select('selectedLocation');
  }

  getIsFavorite(): Observable<boolean> {
    return this.store.select('isFavorite');
  }

  getFavorites(): Observable<Location[]> {
    return this.store.select('favorites');
  }

  // dispatchers

  toggleFavoriteLocation(): void {
    this.store.dispatch(new ToggleFavoriteLocationAction());
  }

  changeSelectedLocation(location: Location): void {
    this.store.dispatch(new ChangeSelectedLocation(location));
  }

  addToFavorites(location: Location): void {
    this.store.dispatch(new AddToFavorites(location));
  }

  // another actions for getting location? search completion?
}
