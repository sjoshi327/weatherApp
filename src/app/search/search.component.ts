import { Component, OnInit, } from '@angular/core';
import { enableProdMode } from '@angular/core';
import { WeatherService } from '../service/weather.service';
import { Http,Response} from '@angular/http';
import { EventEmitter,Input,Output } from '@angular/core';@Component({
 selector: 'app-search',
 templateUrl: './search.component.html',
 styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
 city:any={};
 @Output() city1 = new EventEmitter<any>();
 constructor(private weatherService:WeatherService) { }
ngOnInit(){} 
 searchCity(city:any){
 	if(city===''){
 		alert("Enter City Name");
 	}
 	else{


 this.weatherService.searchCity(city)
 .subscribe((city) => {
   
     this.city =city
      console.log(this.city); 
   this.city1.emit(this.city)
   });}
}
}

