import { Component, OnInit } from '@angular/core';
import {User} from "../../user";
import {UserloginService} from "../../Services/userlogin.service";
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User= new User();
  constructor(
    private userService: UserloginService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login() {
    console.log(this.user);
    this.userService.login(this.user).subscribe((data: any) => {
      console.log(data);
      this.router.navigateByUrl(`welcome/${data.body.id}`);
    }
    );
  }
}
