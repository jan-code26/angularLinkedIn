import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ExperienceService} from "../../Services/experience.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  @Input() userid!: number;
  expForm: FormGroup = new FormGroup({
    organisation_name: new FormControl('', Validators.required),
    organisation_location: new FormControl('', Validators.required),
    exp_summary: new FormControl('', Validators.required),
    start_date: new FormControl('', Validators.required),
    position: new FormControl('', Validators.required),
    end_date: new FormControl(''),
    id: new FormControl(''),
  });
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
    console.log(this.expForm.value)
    this.experienceService.userexp(this.expForm.value, this.userid).subscribe(data => {
      console.log(data);
      this.router.navigateByUrl(`welcome/${this.userid}`);
    }, error => {
      alert("Registration Failed");
    });
  }
}
