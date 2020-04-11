import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Student, Subject, Exercise, Answer } from './../models/student';

@Injectable({
  providedIn: 'root'
})
export class InMemoryApiService implements InMemoryDbService {

  constructor() { }
  createDb() {
    const answers: Answer[] = [{
      name: 'John Doe',
      attachmentUrl: "http://dummy.com"
    }];

    const exercises: Exercise[] = [{
      name: 'Substraction',
      videoUrl: 'https://www.youtube.com/watch?v=_Gr_jvF_ueY',
      submissionDate: new Date(),
      answers: answers
    },
    {
      name: 'Addition',
      videoUrl: 'https://www.youtube.com/watch?v=_Gr_jvF_ueY',
      submissionDate: new Date(),
      answers: answers
    },
    {
      name: 'Multiplication',
      videoUrl: 'https://www.youtube.com/watch?v=_Gr_jvF_ueY',
      submissionDate: new Date(),
      answers: answers
    }];

    const subjects: Subject[] = [
      {
        name: 'Maths',
        exercises: exercises
      }, {
        name: 'German',
        exercises: exercises
      }, {
        name: 'Dutch - Test',
        exercises: exercises
      }];

    let student: Student = {
      id: 1,
      name: 'John Doe',
      class: 'Class 5B',
      subjects: subjects
    };

    return { student };
  }
}
