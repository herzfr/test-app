import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutsRoutingModule } from './layouts-routing.module';
import { PostsService } from '../service/posts.service';
import { ParentComponent } from '../content/parent/parent.component';
import { AdBannerComponent } from '../content/parent/ad-banner.component';
import { HeroProfileComponent } from '../content/parent/hero-profile.component';
import { HeroJobAdComponent } from '../content/parent/hero-job-ad.component';
import { AdDirective } from '../content/parent/ad.directive';
import { AdService } from '../content/parent/ad.service';
import { FormAppComponent } from '../content/form/form.component';
import { QuestionControlService } from '../content/form/question-control.service';
import { QuestionService } from '../content/form/question.service';
import { DynamicFormComponent } from '../content/form/dynamic-form.component';
import { DynamicFormQuestionComponent } from '../content/form/dynamic-form-question.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ParentComponent,
    AdBannerComponent,
    HeroProfileComponent,
    HeroJobAdComponent,
    AdDirective,

    FormAppComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent,
  ],
  imports: [CommonModule, LayoutsRoutingModule, ReactiveFormsModule],
  providers: [PostsService, AdService, QuestionControlService, QuestionService],
})
export class LayoutsModule {}
