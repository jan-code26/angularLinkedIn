import { Component, OnInit } from '@angular/core';
import {Education} from "../education";
import {ActivatedRoute, Router} from "@angular/router";
import {EducationService} from "../../Services/education.service";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  education: Education= new Education();
  constructor(
    private educationService: EducationService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }


  ngOnInit(): void {
  }

  useredu() {
    this.educationService.useredu(this.education).subscribe(data => {
      this.router.navigate(['/welcome']);
    }, error => {
      alert("Registration Failed");
    });
  }

}
