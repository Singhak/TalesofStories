import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TaleinfoService {

  authorNames = [];
  authorUrls: Author[] = [];
  authorNotification = new Subject<any>();
  constructor(private firestore: AngularFirestore) { }

  getAuthorsUrl() {
    return this.firestore.collection('Authors').snapshotChanges().subscribe((res) => {
      return res.map((rawAuthor: any) => {
        this.authorNames = rawAuthor.payload.doc.data().authors;
        this.authorNames.forEach((author, index) => {
          {
            this.authorUrls[index] = {
              name: author.name,
              url: `https://raw.githubusercontent.com/Singhak/Images/master/authors/${this.modifieName(author.name)}`,
              show: false,
              social: author.social
            };
          }
        });
        this.authorNotification.next(this.authorUrls);
      });
    });
  }

  private modifieName(name: string) {
    return name.toLocaleLowerCase().split(' ').join('_');
  }
}


export interface Author {
  name: string;
  url: string;
  show: boolean;
  social: string;
}
