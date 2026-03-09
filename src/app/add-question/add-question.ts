import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
selector:'app-add-question',
standalone:true,
imports:[FormsModule],
templateUrl:'./add-question.html',
styleUrl:'./add-question.css'
})

export class AddQuestion {

question = '';
optionA = '';
optionB = '';
optionC = '';
optionD = '';
answer = '';
message = '';

addQuestion(){

if(this.question && this.optionA && this.optionB && this.optionC && this.optionD && this.answer){
this.message = "Question Added Successfully!";
}
else{
this.message = "Please fill all fields";
}

}

}