import {Component, Input, OnInit} from '@angular/core';
import {Skills} from "./skills";
import {ExperienceService} from "../../Services/experience.service";
import {ActivatedRoute, Router} from "@angular/router";
import {SkillsService} from "../../Services/skills.service";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: Skills[] = [];
  @Input() userid!: number;
  constructor(private skillService: SkillsService,
              private router: Router,
              private route: ActivatedRoute) {
    this.userid = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.userid = this.route.snapshot.params['id'];
    this.skillService.getskills().subscribe(data => {
      console.log(data);
      this.skills=data;
      console.log(this.skills);
    }
    );
  }


  addskill(id: number){
    this.skillService.addskill(this.userid,id).subscribe(data => {
      console.log(data);
      // this.router.navigateByUrl(`welcome/${this.userid}`);
    }, error => {
      alert("Registration Failed");
    }
    );
  }
}
