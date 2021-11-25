import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service'
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  addForm: FormGroup;
  
  submitted = false;

  constructor(private userService: UserService, private router: Router, private fb: FormBuilder) {
    this.initiateAddForm();
  }

  ngOnInit() {
  }

  initiateAddForm() {
    this.addForm = this.fb.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email: ['', Validators.required],
      mobile: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  saveUser() {
    this.userService.create(this.addForm.value)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newUser() {
    this.submitted = false;
    this.initiateAddForm()
  }
}
