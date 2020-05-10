import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../../../core/services/auth.service';
import {LoginRequest} from '../../../../core/models/requests/login-request';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;


  constructor(private router: Router,
              public authService: AuthService,
              private builder: FormBuilder,
              private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.loginForm = this.builder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  login() {
    console.log('Submit', this.loginForm.value);
    const loginRequest = this.loginForm.getRawValue() as LoginRequest;
    this.authService.login(loginRequest).subscribe(perf => {
      this.authService.authorize(perf.auth_token);
      this.router.navigateByUrl('/');
    }, error => {
      this.toastr.error('Please try again', 'Login Failed!');
      this.loginForm.reset();
      console.log(error);
    });
  }

}
