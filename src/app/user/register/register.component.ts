import {Component, Input, OnInit} from '@angular/core';
import {UserregisterService} from "../../Services/userregister.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Details} from "../details";
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:Details = new Details();

  userForm = new FormGroup({
    first_name: new FormControl('', [Validators.required]),
    last_name: new FormControl('', [Validators.required]),
    dob: new FormControl('', [Validators.required]),
    summary: new FormControl('', [Validators.required]),
  });

  @Input() userid!: number;
  constructor(
    private userService: UserregisterService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userid = this.route.snapshot.params['id'];
  }

  register() {
    if(this.userForm.valid) {
      console.log(this.userid);
      this.userService.register( this.userid,<Details>this.userForm.value).subscribe((data: any) => {
          console.log(data);
          this.router.navigateByUrl(`address/${data.id}/0`);
        }
      );
    }
    else{
      alert("Fill all details correctly");
    }
  }
}
