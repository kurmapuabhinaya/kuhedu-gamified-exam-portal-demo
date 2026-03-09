import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
selector:'app-create-quiz',
standalone:true,
imports:[FormsModule],
templateUrl:'./create-quiz.html',
styleUrl:'./create-quiz.css'
})

export class CreateQuiz {

quizTitle = '';
quizDescription = '';
message = '';

createQuiz(){

if(this.quizTitle && this.quizDescription){
this.message = "Quiz Created Successfully!";
}
else{
this.message = "Please fill all fields";
}

}

}