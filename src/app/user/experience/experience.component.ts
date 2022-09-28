import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ExperienceService} from "../../Services/experience.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Experience} from "./experience";


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  @Input() userid!: number;
  @Input() expid!: number;
  experiance:Experience=new Experience();
  present = false;

  ExperienceForm = new FormGroup({
    organisation_name: new FormControl('', [Validators.required]),
    organisation_location: new FormControl('', [Validators.required]),
    exp_summary: new FormControl('', [Validators.required]),
    start_date: new FormControl('', [Validators.required]),
    position: new FormControl('', [Validators.required]),
    end_date: new FormControl('', [Validators.required]),

  });

  constructor(
    private experienceService: ExperienceService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.userid = this.route.snapshot.params['id'];
    this.expid = this.route.snapshot.params['id2'];
    if(this.expid != 0) {
      this.experienceService.getexp(this.expid).subscribe(data => {
        this.ExperienceForm.patchValue(data);
      });
    }
  }

  userexp() {
    if(this.ExperienceForm.valid) {
      console.log(this.experiance);
      this.experienceService.userexp(<Experience>this.ExperienceForm.value, this.userid).subscribe(data => {
        console.log(data);
        this.router.navigateByUrl(`welcome/${this.userid}`);
      }, error => {
        alert("Registration Failed");
      });
    }
    else {
      alert("Invalid Form");
    }
  }

  cancel() {
    this.router.navigateByUrl(`welcome/${this.userid}`);
  }
}
