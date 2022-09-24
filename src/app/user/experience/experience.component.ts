import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ExperienceService} from "../../Services/experience.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Experiance} from "./experiance";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  @Input() userid!: number;
  experiance:Experiance=new Experiance();
  present = false;

  constructor(
    private experienceService: ExperienceService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.userid = this.route.snapshot.params['id'];
  }

  userexp() {
    console.log(this.experiance);
    this.experienceService.userexp(this.experiance, this.userid).subscribe(data => {
      console.log(data);
      this.router.navigateByUrl(`welcome/${this.userid}`);
    }, error => {
      alert("Registration Failed");
    });
  }
}
