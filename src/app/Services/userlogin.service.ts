import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../user";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserloginService {

  private baseUrl = "http://localhost:8080/onboarding/login";
  constructor(private http:HttpClient) {}

  login(user:User):Observable<object> {
    console.log(user);
    return this.http.post(`${this.baseUrl}`, user);
  }
}


