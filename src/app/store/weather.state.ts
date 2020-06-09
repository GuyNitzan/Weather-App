import { Location } from '../global.constants';

export interface WeatherState {
  selectedLocation: Location;
  isFavorite: boolean;
  favorites: Location[];
}
