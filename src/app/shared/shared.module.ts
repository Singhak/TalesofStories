import { JwSocialButtonsModule } from 'jw-angular-social-buttons';
import { LoadingComponent } from './loading-component/loading.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { TrunkTextPipe } from './trunk-text';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../../environments/environment';
import { SubheaderComponent } from './../header/subheader/subheader.component';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { CeiboShare } from 'ng2-social-share';
import { SocialShareComponent } from './social-share/social-share.component';

@NgModule({
    declarations: [SubheaderComponent, TrunkTextPipe, FilterPipe, LoadingComponent, 
        CeiboShare, SocialShareComponent, SocialShareComponent],
    imports: [CommonModule, MarkdownModule.forRoot({
        markedOptions: {
            provide: MarkedOptions,
            useValue: {
                gfm: true,
                tables: true,
                breaks: false,
                pedantic: false,
                sanitize: false,
                smartLists: true,
                smartypants: false,
            }
        }
    }), FormsModule, ReactiveFormsModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        AngularFirestoreModule,
        JwSocialButtonsModule
    ],
    exports: [
        SubheaderComponent,
        TrunkTextPipe,
        CommonModule,
        FilterPipe,
        MarkdownModule,
        FormsModule,
        ReactiveFormsModule,
        AngularFireModule,
        AngularFireDatabaseModule,
        AngularFirestoreModule,
        LoadingComponent,
        JwSocialButtonsModule,
        CeiboShare,
        SocialShareComponent
    ],
})
export class SharedModule { }
