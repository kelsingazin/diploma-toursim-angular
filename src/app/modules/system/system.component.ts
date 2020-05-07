import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../core/services/auth.service';
import {AccountService} from '../../core/services/account.service';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css']
})
export class SystemComponent implements OnInit {

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.userRequest()
      .subscribe(perf => {
        localStorage.setItem('profile', JSON.stringify(perf));
        console.log('perf is ', perf);
      });
  }

}
