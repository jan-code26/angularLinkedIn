import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Experiance} from "../user/experience/experiance";

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  private baseUrl = 'http://localhost:8080/experience';
  constructor(private http:HttpClient) {

  }

  userexp(experiance: Experiance, userid: number) {
    return this.http.post(`${this.baseUrl}/add/${userid}`, experiance);
  }

  deleteexp(id: number) {
    return this.http.delete(`${this.baseUrl}/delete/${id}`);

  }

  getexp(expid: number) {
    return this.http.get<Experiance>(`${this.baseUrl}/get/${expid}`);
  }
}
