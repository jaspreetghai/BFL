import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  FormGroupDirective,
  NgForm,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('flipState', [
      state(
        'active',
        style({
          transform: 'rotateY(179deg)',
        })
      ),
      state(
        'inactive',
        style({
          transform: 'rotateY(0)',
        })
      ),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in')),
    ]),
  ],
})
export class LoginComponent implements OnInit {
  constructor(
    public authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}
  loginForm: FormGroup;
  signUpForm: FormGroup;
  submitted = false;
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [
        null,
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(15),
        ],
      ],
    });
    this.signUpForm = this.formBuilder.group({
      name: [null, [Validators.required]],
      dob: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      pwd: [
        null,
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(15),
        ],
      ],
    });
    console.log(this.loginForm);
    console.log(this.signUpForm);
  }

  flip: string = 'inactive';

  toggleFlip() {
    console.log(this.loginForm);
    console.log(this.signUpForm);

    this.flip = this.flip == 'inactive' ? 'active' : 'inactive';
  }

  login_() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    this.router.navigate(['dashboard']);
  }

  get f() {
    return this.loginForm.controls;
  }

  get signUp() {
    return this.signUpForm.controls;
  }
}
