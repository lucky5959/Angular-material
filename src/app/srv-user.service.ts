import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SrvUserService {
 
 url = "https://jsonplaceholder.typicode.com/users"; 
 constructor(private http:HttpClient) { }
  //  userdata$ = this.http.get(this.url)
   
    servdata(){
         return this.http.get(this.url)
    }
}
