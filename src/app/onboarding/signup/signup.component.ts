import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {User} from "../../user";
import {UsersignupService} from "../../Services/usersignup.service";
import {FormBuilder, FormGroup, Validators ,FormControl} from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user:User= new User();

  signupForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UsersignupService
  ) { }

  ngOnInit(): void {
    this.user.userid = this.route.snapshot.queryParams['id'];
    // console.log(this.userid);
  }

  signup() {
    if (this.signupForm.valid && this.signupForm.value.password === this.signupForm.value.confirmPassword) {
      console.log(this.signupForm.value);
      this.userService.signup(<User>this.signupForm.value).subscribe((data: any) => {
          console.log(data);
          this.router.navigateByUrl(`register/${data.id}`);
        }
      );
    }
    else{
      alert("Fill all details correctly");
    }
  }

  login() {
    this.router.navigateByUrl(`login`);
  }
}
