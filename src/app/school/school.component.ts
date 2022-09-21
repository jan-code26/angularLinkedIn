import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SchoolService} from "../Services/school.service";

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {


  constructor(
    private schoolService: SchoolService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
  }

  showSchools() {
  }
}

