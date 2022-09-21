import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Userdetails} from "../userdetails";

@Injectable({
  providedIn: 'root'
})
export class UserregisterService {

  private baseUrl = "http://localhost:8080/user/post";
  constructor(private http:HttpClient) {}

  register(id:any,user:any):Observable<any> {
    return this.http.post(`${this.baseUrl}/${id}`, user);
  }

}
