import { Component, OnInit } from '@angular/core';
import {Http,Response} from "@angular/http";
import { enableProdMode } from '@angular/core';
import{WeatherService} from "../service/weather.service";

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
	city:any={};

  constructor(private weatherService:WeatherService) { }

 
  delete(city:any){
  	this.weatherService.delete(city).subscribe(res=>{this.city=res});
    location.reload();
    alert("Deleted");	
  	}

  ngOnInit() {
    
    this.weatherService.favData().subscribe((city)=>{
      this.city=city;

    });

  
  }

}

/*
    this.weatherService.save(this.favr).subscribe((city)=>{
alert("Added to favourites");*/