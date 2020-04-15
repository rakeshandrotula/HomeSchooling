export class Student {
    id: number;
    name: string;
    class : string;
    subjects: Subject[];
}

export class Subject{
    name: string;
    exercises: Exercise[];
}

export class Exercise{
    name: string;
    videoUrl: string;
    submissionDate: Date;
    answers : Answer[];
    exerciseFromTeacherUrl : string;
//}exerciseFromTeacherUrl : ExerciseFromTeacher[];
}

export class Answer{
    name : string;
    attachmentUrl : string;
}

/*
export class ExerciseFromTeacher{
    name : string;
    pdfUrl : string;
}*/