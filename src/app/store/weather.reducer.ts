import {WeatherState} from './weather.state';
import {ActionsUnion, ActionTypes} from './weather.actions';

export const initialState: WeatherState = {
  selectedLocation: { name: 'Tel Aviv', id: '1' }, // get Tel Aviv weather
  isFavorite: false,
  favorites: []
};

export function weatherReducer(state: WeatherState = initialState, action: ActionsUnion): WeatherState {
  switch (action.type) {
    case ActionTypes.toggleFavoriteLocation:
      return {
        ...state,
        isFavorite: !state.isFavorite
      };
    case ActionTypes.addToFavorites:
      return {
        ...state,
        favorites: state.favorites + [action.payload]
      };
    case ActionTypes.changeSelectedLocation:
      return {
        ...state,
        selectedLocation: action.payload
      };

    default:
      return state;
  }
}
