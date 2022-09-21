import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Details} from "../home/details";

@Injectable({
  providedIn: 'root'
})
export class UserdetailsService {

  private baseUrl = "http://localhost:8080/user/get";
  private baseUrl1 = "http://localhost:8080/user/put";

  constructor(private http:HttpClient) {}

  getDetails(userid: any):Observable<any> {
    return this.http.get(`${this.baseUrl}/${userid}`);
  }

  putDetails(id: any, user: any):Observable<any> {
    return this.http.put(`${this.baseUrl1}/${id}`, user);
  }
}


