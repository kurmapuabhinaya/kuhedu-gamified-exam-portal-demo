import { Routes } from '@angular/router';

import { LoginComponent } from './login/login';
import { Dashboard } from './dashboard/dashboard';
import { CreateQuiz } from './create-quiz/create-quiz';
import { AddQuestion } from './add-question/add-question';
import { PracticeViewer } from './practice-viewer/practice-viewer';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: Dashboard },
  { path: 'create-quiz', component: CreateQuiz },
  { path: 'add-question', component: AddQuestion },
  { path: 'practice', component: PracticeViewer }
];