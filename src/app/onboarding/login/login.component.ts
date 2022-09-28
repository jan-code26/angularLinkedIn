import { Component, OnInit } from '@angular/core';
import {User} from "../../user";
import {UserloginService} from "../../Services/userlogin.service";
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators ,FormControl} from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User= new User();

  invalid: boolean = false;
  LoginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private userService: UserloginService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login() {
    if(this.LoginForm.valid) {
      console.log(this.LoginForm.value);
      this.userService.login(<User>this.LoginForm.value).subscribe((data: any) => {
          console.log(data);
          this.router.navigateByUrl(`welcome/${data.body.id}`);
        }
      );
    }
    else{
      this.invalid = true;
      alert("Fill all details correctly");
    }
  }

  signup() {
    this.router.navigateByUrl(`signup`);
  }
}
