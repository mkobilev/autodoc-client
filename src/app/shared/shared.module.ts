import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    // ArticleListComponent,
    // ArticleMetaComponent,
    // ArticlePreviewComponent,
    CommonModule,
    // FavoriteButtonComponent,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // ListErrorsComponent,
    RouterModule,
    // ShowAuthedDirective
  ]
})
export class SharedModule {}
