import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Details} from "../home/details";

@Injectable({
  providedIn: 'root'
})
export class UserdetailsService {

  private baseUrl = "http://localhost:8080/user";

  constructor(private http:HttpClient) {}

  getDetails(userid: any):Observable<any> {
    return this.http.get(`${this.baseUrl}/get/${userid}`);
  }

  putDetails(id: any, user: any):Observable<any> {
    return this.http.put(`${this.baseUrl}/put/${id}`, user);
  }




}


