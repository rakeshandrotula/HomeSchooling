import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UserService } from './../services/user.service';
import { Student, Answer } from './../models/student';
import { HostListener } from '@angular/core';
import { MDBModal} from "mdbreact";

declare var require: any
const FileSaver = require('file-saver');

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

  downloadPdf(pdfUrl: string, pdfName: string ) {
    //const pdfUrl = './assets/sample.pdf';
    //const pdfName = 'your_pdf_file';
    FileSaver.saveAs(pdfUrl, pdfName);
//    FileSaver.saveAs('https://file-examples.com/wp-content/uploads/2017/10/file-example_PDF_500_kB.pdf', pdfName);
//    FileSaver.saveAs('../../assets/pdf/bruchteil-muster.pdf', pdfName);

  }

  openDoc(pdfUrl: string) {
    window.open(pdfUrl, '_blank', '', true);
  }

  /*Show upload div*/
  showFileUpload = {
    showUpload : false
  }

  /*Show Question div*/
  showQuestionDialog = {
    showQ : false
  }
  
  @HostListener('document:mouseover', ['$event'])
    mouseover(event) {
        if(event.target.matches('.mOver')) {
            alert('hover to editor div')
        }
    }
}
