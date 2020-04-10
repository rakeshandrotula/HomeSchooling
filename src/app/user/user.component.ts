import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UserService } from './../services/user.service';
import { Student } from './../models/student';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserComponent implements OnInit {
  panelOpenState = false;
  student: Student;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getStudent().subscribe(data => {
      this.student = data;
    });
  }

}
