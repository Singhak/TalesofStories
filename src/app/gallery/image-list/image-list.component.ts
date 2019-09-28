import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ImageService } from '../image/shared/image.service';


@Component({
  selector: 'app-gallery',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})

export class ImageListComponent implements OnInit, OnChanges {
  title = 'Recent Photos';
  visibleImages: any[] = [];
  errorMsg = '';
  // Create an input
  @Input() filterBy = 'all';

  constructor(private imageService: ImageService) {
    if (!imageService.isInternetConnected()) {
      this.errorMsg = 'Please check your internet Connection';
    } else {
      imageService.getImagesUrl();
      this.errorMsg = '';

    }
    // this.visibleImages = this.imageService.getImages();

  }

  ngOnInit() {
    this.imageService.imgUrlNotification.subscribe(() => {
      console.log(this.imageService.imgUrls);
      this.visibleImages = this.imageService.imgUrls;
    });
  }

  ngOnChanges() {
    // this.visibleImages = this.imageService.getImages();
  }
}
