import {Component, Input, OnInit} from '@angular/core';
import {UserdetailsService} from "../../Services/userdetails.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Details} from "../details";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  user:Details = new Details();
  @Input() userid!: number;
  constructor(
    private userDetailsService: UserdetailsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userid = this.route.snapshot.params['id'];
    this.userDetailsService.getDetails(this.userid).subscribe(data => {
        this.user= data;
    }, error => {
      console.log(error);
    }
    );
  }

  editUser(id: number) {
    this.userDetailsService.putDetails(id, this.user).subscribe(data => {
        this.user = data;
        this.router.navigateByUrl(`welcome/${id}`);
      }
    );
  }
}
