import { Component } from '@angular/core';

@Component({
selector:'app-practice-viewer',
standalone:true,
templateUrl:'./practice-viewer.html',
styleUrl:'./practice-viewer.css'
})

export class PracticeViewer {

result = '';

submitAnswer(){
this.result = "Answer Submitted!";
}

}