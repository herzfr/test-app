import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutsRoutingModule } from './layouts-routing.module';
import { PostsService } from '../service/posts.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, LayoutsRoutingModule],
  providers: [PostsService],
})
export class LayoutsModule {}
