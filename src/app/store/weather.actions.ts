import {Action } from '@ngrx/store';
import { Location } from '../global.constants';

export enum ActionTypes {
  toggleFavoriteLocation = '[isFavorite] Toggle Favorite Location',
  changeSelectedLocation = '[selectedLocation] Change Selected Location',
  addToFavorites = '[favorites] Add To Favorites'
}

export class ToggleFavoriteLocationAction implements Action {
  readonly type = ActionTypes.toggleFavoriteLocation;
  payload: any;
}

export class ChangeSelectedLocation implements Action {
  readonly type = ActionTypes.changeSelectedLocation;
  constructor(public payload: Location) {}
}

export class AddToFavorites implements Action {
  readonly type = ActionTypes.addToFavorites;
  constructor(public payload: Location) {}
}

export type ActionsUnion = ToggleFavoriteLocationAction | ChangeSelectedLocation | AddToFavorites;
