import { Subject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ImageService {
    visibleImages = [];
    imgNames = [];
    imgUrls = [];
    imgUrlNotification = new Subject<any>();
    constructor(private firestore: AngularFirestore) { }
    // tslint:disable: no-use-before-declare

    isInternetConnected(): boolean {
        return navigator.onLine;
    }

    getImagesUrl() {
        return this.firestore.collection('Images').snapshotChanges().subscribe((res) => {
            return res.map((rawimg: any) => {
                this.imgNames = rawimg.payload.doc.data().gallery;
                this.imgNames.forEach((name, index) => {
                    {
                        this.imgUrls[index] = {
                            url: `https://raw.githubusercontent.com/Singhak/Images/master/paints/${name.name}`,
                            show: false,
                            category: name.category
                        };
                    }
                });
                this.imgUrlNotification.next(this.imgUrls);
            });
        });

    }
    getImageUrl(index: number) {
        return this.imgUrls[index];
    }

    getImageCount() {
        return this.imgUrls.length;
    }
}
