import {Component, Input, OnInit} from '@angular/core';
import {Education} from "./education";
import {ActivatedRoute, Router} from "@angular/router";
import {EducationService} from "../../Services/education.service";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  @Input() userid!: number;
  education: Education= new Education();
  constructor(
    private educationService: EducationService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }


  ngOnInit(): void {
    this.userid = this.route.snapshot.params['id'];
  }

  useredu() {
    this.educationService.useredu(this.education,this.userid).subscribe(data => {
      this.router.navigateByUrl(`welcome/${this.userid}`);
    }, error => {
      alert("Registration Failed");
    });
  }

}
