import { Component } from '@angular/core';

import { QuestionService } from './question.service';
import { QuestionBase } from './question-base';
import { Observable } from 'rxjs';

@Component({
  selector: 'form-app',
  template: `
    <div>
      <h2>Job Application for Heroes</h2>
      <!-- <app-dynamic-form [questions]="questions$ | async"></app-dynamic-form> -->
      <app-dynamic-form [questions]="questions2$ | async"></app-dynamic-form>
    </div>
  `,
  providers: [QuestionService],
})
export class FormAppComponent {
  questions$: Observable<QuestionBase<any>[]>;
  questions2$: Observable<QuestionBase<any>[]>;

  constructor(service: QuestionService) {
    this.questions$ = service.getQuestions();
    this.questions2$ = service.getLoginForm();
    console.log(this.questions2$);
    console.log(this.questions$);
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
