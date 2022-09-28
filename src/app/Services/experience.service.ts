import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Experience} from "../user/experience/experience";

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  private baseUrl = 'http://localhost:8080/experience';
  constructor(private http:HttpClient) {

  }

  userexp(experiance: Experience, userid: number) {
    return this.http.post(`${this.baseUrl}/add/${userid}`, experiance);
  }

  deleteexp(id: number) {
    return this.http.delete(`${this.baseUrl}/delete/${id}`);

  }

  getexp(expid: number) {
    return this.http.get<Experience>(`${this.baseUrl}/get/${expid}`);
  }
}
