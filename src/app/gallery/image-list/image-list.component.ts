import { Component, Input, OnChanges } from '@angular/core';
import { ImageService } from '../image/shared/image.service';


@Component({
  selector: 'app-gallery',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})

export class ImageListComponent implements OnChanges {
  title = 'Recent Photos';
  visibleImages: any[] = [];

  // Create an input
  @Input() filterBy = 'all';

  constructor(private imageService: ImageService) {
    this.visibleImages = this.imageService.getImages();

  }

  ngOnChanges() {
    this.visibleImages = this.imageService.getImages();
  }
}
