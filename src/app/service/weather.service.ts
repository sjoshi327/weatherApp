import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class WeatherService {
 constructor(public http:Http) { }

searchCity(city){
    return this.http.get('http://api.apixu.com/v1/forecast.json?key=d8510de105a045aa9ef53836170709&q='+city+'&days=9')
    .map(res => res.json());
}
save(city){
	//console.log(city);
	return this.http.post("http://localhost:3002/city",city).map(res=>res.json());
	
} 
favData(){
	return this.http.get("http://localhost:3002/findCity").map(res=>res.json());
}
delete(city:any){
	return this.http.delete("http://localhost:3002/delete/"+city._id).map(res=>res.json());
}


}