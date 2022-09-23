import { Injectable } from '@angular/core';
import {Education} from "../user/education/education";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  baseUrl = "http://localhost:8080/education";
  constructor(private http:HttpClient) { }

  useredu(education: Education, userid: number) {
    return this.http.post<Education>(`${this.baseUrl}/add/${userid}`, education);
  }

  deleteedu(id: number) {
    return this.http.delete(`${this.baseUrl}/delete/${id}`);
  }


}
