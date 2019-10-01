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
import { ShareButtonsModule } from '@ngx-share/buttons';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { SubheaderComponent } from './../header/subheader/subheader.component';
import { SocialShareComponent } from './social-share/social-share.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [SubheaderComponent, TrunkTextPipe, FilterPipe, LoadingComponent,
        SocialShareComponent, SocialShareComponent],
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
        HttpClientModule,       // (Required) For share counts
        ShareButtonsModule
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
        SocialShareComponent
    ],
})
export class SharedModule { }
