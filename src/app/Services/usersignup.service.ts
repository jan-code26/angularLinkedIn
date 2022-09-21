import { Injectable } from '@angular/core';
import {User} from "../user";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsersignupService {

  baseUrl = "http://localhost:8080/onboarding/signup";
  constructor(private http:HttpClient) { }

  signup(user: User):Observable<any>{
    return this.http.post(`${this.baseUrl}`, user);

  }
}
