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
  @Input() eduid!: number;
  education: Education= new Education();
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
        this.education = data;
      });
    }
  }

  useredu() {
    if(this.eduid==0) {
      this.educationService.useredu(this.education, this.userid).subscribe(data => {
        this.router.navigateByUrl(`welcome/${this.userid}`);
      }, error => {
        alert("Failed");
      });
    }
    else{

        this.educationService.updateedu(this.education, this.eduid).subscribe(data => {
          this.router.navigateByUrl(`welcome/${this.userid}`);
        }, error => {
          alert("Failed");
        });

    }
  }

}
