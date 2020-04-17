import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UserService } from './../services/user.service';
import { Student, Answer } from './../models/student';

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

  addAnswer(answer: Answer[]) : void{
    let ans : Answer = {name:'New Name', attachmentUrl:'www.dummy1.com'}
    answer.push(ans);
  }

}
