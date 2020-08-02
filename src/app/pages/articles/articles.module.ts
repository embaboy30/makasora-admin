import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesComponent } from './articles.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { NebularImportModule } from '../../shared/nebular-import/nebular-import.module';


@NgModule({
  declarations: [
    ArticlesComponent,
    ArticleListComponent,
  ],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    NebularImportModule,
  ],
})
export class ArticlesModule { }
