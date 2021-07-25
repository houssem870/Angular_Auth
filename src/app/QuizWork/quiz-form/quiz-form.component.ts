import { Component, OnInit } from '@angular/core';
import { Quiz } from '../Quiz';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz-form',
  templateUrl: './quiz-form.component.html',
  styleUrls: ['./quiz-form.component.css']
})
export class QuizFormComponent implements OnInit {

  quizz:any;



  constructor(
    private QuizService:QuizService ) {
    this.quizz=new Quiz();
     }



  onSubmit() {
    console.log(this.quizz)
    this.QuizService.addQuiz(this.quizz).subscribe();
  }







  message:any;
  submitted = false;
  Quiz:Quiz=new Quiz();

   ngOnInit(): void {
     this.QuizService.retrieveQuiz().subscribe((data:Quiz[])=> {
       console.log(data);
       this.quizz=data;
     });
   }









}
