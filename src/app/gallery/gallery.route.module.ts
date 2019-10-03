import { ImageListComponent } from './image-list/image-list.component';
import { NgModule } from '@angular/core';
import { ImageDetailComponent } from './image/image-detail.component';
import { GalleryComponent } from './gallery.comonent';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    {
        path: '', component: GalleryComponent,
        children: [
            {
                path: '', component: ImageListComponent
            },
            {
                path: ':id', component: ImageDetailComponent
            }
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class GalleryRoutingModule { }
