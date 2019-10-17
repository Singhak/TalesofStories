import { PostsComponent } from './posts.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostDetailsComponent } from './post-details/post-details.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { PostListComponent } from './post-list/post-list.component';

const routes: Routes = [
  {
    path: '',
    component: PostsComponent,
    children: [
      { path: '', component: PostListComponent },
      { path: 'new', component: PostEditComponent },
      { path: ':id/edit', component: PostEditComponent },
      { path: ':id', component: PostDetailsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostRoutingModule { }
