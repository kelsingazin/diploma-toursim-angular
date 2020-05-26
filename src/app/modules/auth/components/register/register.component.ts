import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../../core/services/auth.service';
import {Router} from '@angular/router';
import {MustMatch} from '../../../../core/validators/must-match';
import {RegisterUserRequest} from '../../../../core/models/requests/register-user-request';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;

  constructor(public authService: AuthService,
              private router: Router,
              private builder: FormBuilder) {
  }

  ngOnInit(): void {
    this.registerForm = this.builder.group({
      username: ['', [Validators.required]],
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
      validator: MustMatch('password', 'confirmPassword')
    });
  }

  register() {
    // console.log('Submit', this.registerForm.value);
    if (this.registerForm.invalid) {
      return;
    }
    const user = this.registerForm.getRawValue() as RegisterUserRequest;
    this.authService.register(user).subscribe(perf => {
      this.router.navigateByUrl('/auth');
    }, err => {
      console.log(err);
    });
  }
}
