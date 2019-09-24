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

@NgModule({
    declarations: [SubheaderComponent, TrunkTextPipe, FilterPipe],
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
        AngularFirestoreModule
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
    ],
})
export class SharedModule { }
