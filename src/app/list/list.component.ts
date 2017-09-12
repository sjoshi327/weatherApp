import { Component, OnInit,EventEmitter,Input } from '@angular/core';
import { enableProdMode } from '@angular/core';
import {WeatherService}  from '../service/weather.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent{
	fav:any=[]
	favr:any={};
	@Input('city') city:any;

  constructor(private weatherService:WeatherService) { }
  save(city:any,region:any,edit:any){
   
  	this.favr={
      "city":city,
	    "region":region,
  		"date":edit.date,
      "maxTemp":edit.day.maxtemp_c,
      "minTemp":edit.day.mintemp_c,
      "condition":edit.day.condition.text
  	}
	
  	this.weatherService.save(this.favr).subscribe((city)=>{
alert("Added to favourites");
  	})

  }

 
 
}
