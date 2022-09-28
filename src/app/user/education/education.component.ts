import {Component, Input, OnInit} from '@angular/core';
import {Education} from "./education";
import {ActivatedRoute, Router} from "@angular/router";
import {EducationService} from "../../Services/education.service";
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  @Input() userid!: number;
  @Input() eduid!: number;
  education: Education= new Education();

  educationForm = new FormGroup({
    degree_name: new FormControl('', [Validators.required]),
    start_date: new FormControl('', [Validators.required]),
    end_date: new FormControl('', [Validators.required]),
    institution_name: new FormControl('', [Validators.required]),
    institution_location: new FormControl('', [Validators.required]),
    summary: new FormControl('', [Validators.required]),
  });

  constructor(
    private educationService: EducationService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }


  ngOnInit(): void {
    this.userid = this.route.snapshot.params['id'];
    this.eduid = this.route.snapshot.params['id2'];
    if(this.eduid != 0) {
      this.educationService.getedu(this.eduid).subscribe(data => {
        this.educationForm.patchValue(data);
      });
    }
  }

  useredu() {
    if(this.educationForm.valid) {
      if (this.eduid == 0) {
        this.educationService.useredu(<Education>this.educationForm.value, this.userid).subscribe(data => {
          this.router.navigateByUrl(`welcome/${this.userid}`);
        }, error => {
          alert("Failed");
        });
      } else {

        this.educationService.updateedu(<Education>this.educationForm.value, this.eduid).subscribe(data => {
          this.router.navigateByUrl(`welcome/${this.userid}`);
        }, error => {
          alert("Failed");
        });

      }
    }
    else {
      alert("Invalid");
    }
  }

  cancel() {
    this.router.navigateByUrl(`welcome/${this.userid}`);
  }
}
