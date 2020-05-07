import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../../../core/services/auth.service';
import {LoginRequest} from '../../../../core/models/requests/login-request';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  loading = false;

  constructor(private router: Router,
              public authService: AuthService,
              private builder: FormBuilder) {}

  ngOnInit(): void {
    // this.loginForm = new FormGroup({
    //   username: new FormControl(null, [
    //     Validators.required
    //   ]),
    //   password: new FormControl(null, [
    //     Validators.required,
    //     Validators.minLength(6)
    //   ])
    // });
    this.loginForm = this.builder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }


  login() {
    console.log('Submit', this.loginForm.value);

    // const loginRequest = this.loginForm.getRawValue() as LoginRequest;
    // this.loading = true;
    // this.authService.login(loginRequest).subscribe(perf => {
    //   this.loading = false;
    //   this.authService.authorize(perf.auth_token);
    //   this.router.navigateByUrl('/');
    // }, error => {
    //   this.loading = false;
    //   console.log(error);
    // });

    const loginRequest = this.loginForm.getRawValue() as LoginRequest;
    this.loading = true;
    this.authService.login(loginRequest).subscribe(perf => {
      this.loading = false;
      this.authService.authorize(perf.auth_token);
      this.router.navigateByUrl('/');
    }, error => {
      this.loading = false;
      console.log(error);
    });
  }
}
