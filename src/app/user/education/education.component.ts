import {Component, Input, OnInit} from '@angular/core';
import {Education} from "./education";
import {ActivatedRoute, Router} from "@angular/router";
import {EducationService} from "../../Services/education.service";
import {FormGroup, Validators} from "@angular/forms";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  @Input() userid!: number;
  eduForm = new FormGroup({
    degree_name: new FormControl('', Validators.required),
    start_date: new FormControl('', Validators.required),
    end_date: new FormControl('', Validators.required),
    institution_name: new FormControl('', Validators.required),
    institution_location: new FormControl('', Validators.required),
    grade: new FormControl('', Validators.required),
    present: new FormControl('', Validators.required),
  });
  education: Education= new Education();
  ispresent=false;
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
    this.education.degree_name = <string>this.eduForm.value.degree_name;
    this.education.start_date = <string>this.eduForm.value.start_date;
    this.education.end_date = <string>this.eduForm.value.end_date;
    this.education.institution_name = <string>this.eduForm.value.institution_name;
    this.education.institution_location = <string>this.eduForm.value.institution_location;
    this.education.grade = <string>this.eduForm.value.grade;
    this.educationService.useredu(this.education,this.userid).subscribe(data => {
      this.router.navigateByUrl(`welcome/${this.userid}`);
    }, error => {
      alert("Registration Failed");
    });
  }

  ifOther() {
    if (this.eduForm.value.degree_name == 'Other') {
      return false;
    }
    return true;
  }

  ifpresent() {
    if (this.eduForm.value.present == "present") {
      this.ispresent=true;
      return false;
    }
    this.ispresent=false;
    return true;
  }
}
