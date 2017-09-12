import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { WeatherService } from './service/weather.service';
import { ListComponent } from './list/list.component';

import { FavouriteComponent } from './favourite/favourite.component';
import { WeatherComponent } from './weather/weather.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';


const routes:Routes=[
{path:'search',
component:WeatherComponent},
{
  path:'favourite',
  component:FavouriteComponent
},
{
  path:'login',
  component:LoginComponent
},
{
  path:'signup',
  component:SignUpComponent 
}

];
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ListComponent,
    FavouriteComponent,
    WeatherComponent,
    LoginComponent,
    SignUpComponent,

    
    
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule, RouterModule.forRoot(routes)
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
