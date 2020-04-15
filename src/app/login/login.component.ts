import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import{ GlobalConstants } from '../common/global-constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
showSpinner: boolean;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login() : void {
/*    if(this.username == 'admin' && this.password == 'admin'){
      this.router.navigate(["user"]);
 */
    if(this.username != ''){
      GlobalConstants.displayUserName = this.username;
      this.router.navigate(["user"]);
    } else{
          alert("Invalid credentials");
    }
  }
}
