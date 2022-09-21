import { Injectable } from '@angular/core';
import {Education} from "../user/education";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  baseUrl = "http://localhost:8080/onboarding/education";
  constructor(private http:HttpClient) { }

  useredu(education: Education) {
    return this.http.post(`${this.baseUrl}`, education);
  }
}
