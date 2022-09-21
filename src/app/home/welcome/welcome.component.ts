import {Component, Input, OnInit} from '@angular/core';
import {Details} from "../details";
import {UserdetailsService} from "../../Services/userdetails.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Address} from "../../address/address";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  user:Details = new Details();
  address:Address = new Address();
  @Input() userid!: number;
  constructor(
    private userDetailsService: UserdetailsService,
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
    }, error => {
      console.log(error);
    }
    );
  }


  edit(id: number) {
    this.router.navigateByUrl(`edit/${id}`);
  }

  editadd(id: number) {
    this.router.navigateByUrl(`address/${id}`);
  }
}
