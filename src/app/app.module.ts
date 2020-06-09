import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { WeatherComponent } from './components/weather/weather.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/weather/search/search.component';
import { LocationWeatherComponent } from './components/weather/location-weather/location-weather.component';

const routes: Routes = [
  { path: '', redirectTo: 'weather', pathMatch: 'full' },
  { path: 'weather', component: WeatherComponent },
  { path: 'favorites', component: FavoritesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    FavoritesComponent,
    HeaderComponent,
    SearchComponent,
    LocationWeatherComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
