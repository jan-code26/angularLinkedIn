import {Component, Input, OnInit} from '@angular/core';
import {Details} from "../details";
import {UserdetailsService} from "../../Services/userdetails.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Address} from "../../address/address";
import {Education} from "../../user/education/education";
import {EducationService} from "../../Services/education.service";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  user:Details = new Details();
  address:Address = new Address();
  //array of education
  educational: Education[] = [];
  @Input() userid!: number;
  education: boolean=false;
  constructor(
    private userDetailsService: UserdetailsService,
    private educationService: EducationService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userid = this.route.snapshot.params['id'];
    this.getDetails();
  }

  getDetails() {
    this.userDetailsService.getDetails(this.userid).subscribe(data => {
        console.log(data);
        this.user= data;
        this.address = data.address;
        this.educational = data.education;
        this.education = true;
        console.log(this.educational[0].degree_name);
    }, error => {
      console.log(error);
    }
    );
  }


  edit(id: number) {
    this.router.navigateByUrl(`edit/${id}`);
  }

  editadd(id: number) {
    this.router.navigateByUrl(`address/${id}/${this.address.id}`);
  }

  addedu() {
    this.education = true;
    this.router.navigateByUrl(`education/${this.userid}`);
  }

  deleteedu(id: number) {
    this.educationService.deleteedu(id).subscribe(data => {
      this.educational.pop();
      this.router.navigateByUrl(`welcome/${this.userid}`);
    }
    );
  }
}
