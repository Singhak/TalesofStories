import { ImageListComponent } from './image-list/image-list.component';
import { NgModule } from '@angular/core';

import { SharedModule } from './../shared/shared.module';
import { GalleryComponent } from './gallery.comonent';
import { ImageDetailComponent } from './image/image-detail.component';
import { GalleryRoutingModule } from './gallery.route.module';

@NgModule({
    imports: [SharedModule, GalleryRoutingModule],
    declarations: [GalleryComponent, ImageDetailComponent, ImageListComponent]
})
export class GalleryModule { }
