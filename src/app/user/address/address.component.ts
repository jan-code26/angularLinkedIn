import {Component, Input, OnInit} from '@angular/core';
import {Address} from "./address";
import {AddressService} from "../../Services/address.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  address: Address = new Address();

  addressForm = new FormGroup({
    country: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    zip: new FormControl('', [Validators.required]),
    street: new FormControl('', [Validators.required]),
  });

  @Input() userid!: number;
  @Input() addressid!: number;
  constructor(
    private addressService: AddressService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userid = this.route.snapshot.params['id'];
    this.addressid = this.route.snapshot.params['id2'];
    if(this.addressid != 0) {
      this.addressService.getAddress(this.addressid).subscribe(data => {

        this.addressForm.patchValue(data);
      });
    }
  }

  addAddress() {
    //console.log(this.address);
    //get data from service
    if(this.addressForm.valid) {
      if (this.addressid == 0) {
        this.addressService.addAddress(this.userid, <Address>this.addressForm.value).subscribe(data => {
            this.address = data;
            this.router.navigateByUrl(`welcome/${this.userid}`);
          }
        );
      } else {
        this.addressService.updateAddress(this.addressid, <Address>this.addressForm.value).subscribe(data2 => {
            console.log(data2);
            this.router.navigateByUrl(`welcome/${this.userid}`);
          }, error => {
            alert("Address Failed");
          }
        );
      }
    }
  }


}
