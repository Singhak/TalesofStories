import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { ImageService } from './shared/image.service';

@Component({
    // selector: 'app-image-detail',
    templateUrl: './image-detail.component.html',
    styleUrls: ['./image-detail.component.css']
})

export class ImageDetailComponent implements OnInit {
    image: any;
    id: number;

    constructor(private imageService: ImageService, private route: ActivatedRoute, private router: Router) {
        
    }
    ngOnInit() {
        console.log('Image Details');

        // + sign converts id to number, this.route.snapshot provides initial value of route parameter
        this.route.params.subscribe((param: Params) => {
            this.id = +param.id;
            this.image = this.imageService.getImageUrl(this.id);
            console.log(this.image);

        });
        // this.image = this.imageService.getImage(
        // +this.route.snapshot.params['id']);
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
}
