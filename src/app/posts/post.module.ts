import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from './../shared/shared.module';
import { PostEditComponent } from './post-edit/post-edit.component';
import { PostRoutingModule } from './post.routing.module';

// import our custom module, library created using this article
// https://medium.com/@ngl817/building-an-angular-4-component-library-with-the-angular-cli-and-ng-packagr-53b2ade0701e
import { AngularMarkdownEditorModule } from '../../lib/angular-markdown-editor/angular-markdown-editor.module';
import { PostsComponent } from './posts.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostItemComponent } from './post-item/post-item.component';

@NgModule({
    declarations: [
        PostEditComponent,
        PostsComponent,
        PostDetailsComponent,
        PostListComponent,
        PostItemComponent,
    ],
    imports: [
        SharedModule,
        PostRoutingModule,
        FormsModule,
        AngularMarkdownEditorModule.forRoot({
            // add any Global Options/Config you might want
            // to avoid passing the same options over and over in each components of your App
            iconlibrary: 'glyph'
        })
    ],
    exports: [
    ]
})
export class PostModule { }
