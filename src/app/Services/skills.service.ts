import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Skills} from "../user/skills/skills";

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  private baseUrl = 'http://localhost:8080/skill';
  constructor(
    private http: HttpClient
  ) { }

  getskills() {
    return this.http.get<Skills[]>(`${this.baseUrl}/all`);
  }

  userskill(skill: Skills[], userid: number) {
    return this.http.post<Skills[]>(`${this.baseUrl}/add/${userid}`, skill);
  }
}
