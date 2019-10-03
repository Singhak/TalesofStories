import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { ImageService } from './shared/image.service';
import { Subscription } from 'rxjs';
import { ViewCompileResult } from '@angular/compiler/src/view_compiler/view_compiler';

@Component({
    // selector: 'app-image-detail',
    templateUrl: './image-detail.component.html',
    styleUrls: ['./image-detail.component.css']
})

export class ImageDetailComponent implements OnInit, OnDestroy {
    imageSubscription: Subscription;
    image: any;
    id: number;
    desc = 'Checkout our latest panting and sketches at our web site.';
    shareUrl = '';
    constructor(private imageService: ImageService, private route: ActivatedRoute, private router: Router) {
    }
    ngOnInit() {
        console.log('Image Details');
        // + sign converts id to number, this.route.snapshot provides initial value of route parameter
        this.route.params.subscribe((param: Params) => {
            this.image = undefined;
            this.id = +param.id;
            this.image = this.imageService.getImageUrl(this.id);
            if (!this.image) {
                this.imageService.getImagesUrl();
            }
        });

        this.imageSubscription = this.imageService.imgUrlNotification.subscribe((imgUrl) => {
            if (!this.image) {
                this.image = imgUrl[this.id];
            }
        });
    }

    next() {
        this.id++;
        this.id = this.id >= this.imageService.getImageCount() ? this.id - 1 : this.id;
        this.router.navigate(['/arts', this.id]);
    }
    previous() {
        this.id--;
        this.id = this.id < 0 ? 0 : this.id;
        this.router.navigate(['/arts', this.id]);
    }

    ngOnDestroy() {
        this.imageSubscription.unsubscribe();
    }
}
