import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Student, Subject, Exercise, Answer } from './../models/student';
import { GlobalConstants } from '../common/global-constants';

@Injectable({
  providedIn: 'root'
})
export class InMemoryApiService implements InMemoryDbService {

  constructor() { }
  createDb() {
    const answers: Answer[] = [{
      //ame: 'John Doe',
      name: GlobalConstants.displayUserName,
      attachmentUrl: "http://dummy.com"
    }];
/*
    const exerciseFromTeacher: ExerciseFromTeacher[] = [{
      //ame: 'John Doe',
      name: 'Exercise From Teacher',
      pdfUrl: "https://google.com"
//      attachmentUrl: "../../assets/pdf/bruchteil-muster.pdf"
    }];
*/
    const exercises: Exercise[] = [{
      name: 'Substraction',
      videoUrl: 'TBbT-ZXPUCY',
      submissionDate: new Date(),
      answers: answers,
      //exerciseFromTeacher: exerciseFromTeacher
      exerciseFromTeacherUrl: 'https://file-examples.com/wp-content/uploads/2017/10/file-example_PDF_500_kB.pdf'
    },
    {
      name: 'Addition',
      videoUrl: 'TBbT-ZXPUCY',
      submissionDate: new Date(),
      answers: answers,
      exerciseFromTeacherUrl: 'https://file-examples.com/wp-content/uploads/2017/10/file-example_PDF_500_kB.pdf'
    },
    {
      name: 'Multiplication',
      videoUrl: 'TBbT-ZXPUCY',
      submissionDate: new Date(),
      answers: answers,
      exerciseFromTeacherUrl: 'https://file-examples.com/wp-content/uploads/2017/10/file-example_PDF_500_kB.pdf'
    }];


    const subjects: Subject[] = [
      {
        name: 'Maths',
        exercises: exercises
      }, {
        name: 'German',
        exercises: exercises
      }, {
        name: 'Dutch',
        exercises: exercises
      }];

    let student: Student = {
      id: 1,
      //name: 'John Doe',
      name: GlobalConstants.displayUserName,
      class: 'Class 5B',
      subjects: subjects
    };

    return { student };
  }
}
