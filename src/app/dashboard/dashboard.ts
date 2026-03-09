import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
selector: 'app-dashboard',
standalone: true,
templateUrl: './dashboard.html',
styleUrl: './dashboard.css'
})

export class Dashboard {

constructor(private router: Router){}

goCreateQuiz(){
this.router.navigate(['/create-quiz']);
}

goAddQuestion(){
this.router.navigate(['/add-question']);
}

goPractice(){
this.router.navigate(['/practice']);
}

}