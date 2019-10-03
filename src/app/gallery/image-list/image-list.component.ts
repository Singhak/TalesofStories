import { Component, Input, OnChanges, OnInit, OnDestroy } from '@angular/core';
import { ImageService } from '../image/shared/image.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-gallery',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})

export class ImageListComponent implements OnInit, OnChanges, OnDestroy {
  title = 'Recent Photos';
  visibleImages: any[] = [];
  images: any[] = [];
  maxLen = 9;
  prev = 0;
  next = 0;
  errorMsg = '';
  imageSubscription: Subscription;
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
    this.imageSubscription = this.imageService.imgUrlNotification.subscribe(() => {
      console.log(this.imageService.imgUrls);
      this.images = this.imageService.imgUrls;
      this.next = this.maxLen;
      this.visibleImages = this.images.slice(0, this.maxLen);
      if (!this.visibleImages.length) {
        this.errorMsg = 'Error: Something wrong while fecthing images.';
      } else { this.errorMsg = '' }
    });
  }

  ngOnChanges() {
    // this.visibleImages = this.imageService.getImages();
  }

  onPrev() {
    this.prev = this.prev - this.maxLen;
    this.next = this.next - this.maxLen;
    this.visibleImages = this.images.slice(this.prev, this.next);
  }

  onNext() {
    this.prev = this.prev + this.maxLen;
    this.next = this.next + this.maxLen;
    this.visibleImages = this.images.slice(this.prev, this.next);
  }

  ngOnDestroy() {
    this.imageSubscription.unsubscribe();
  }
}
