import { ImageListComponent } from './image-list/image-list.component';
import { NgModule } from '@angular/core';

import { SharedModule } from './../shared/shared.module';
import { GalleryComponent } from './gallery.comonent';
import { ImageDetailComponent } from './image/image-detail.component';
import { GalleryRoutingModule } from './gallery.route.module';
import { DeferLoadModule } from '@trademe/ng-defer-load';

@NgModule({
    imports: [SharedModule, GalleryRoutingModule, DeferLoadModule],
    declarations: [GalleryComponent, ImageDetailComponent, ImageListComponent],
    exports: [DeferLoadModule]
})
export class GalleryModule { }
