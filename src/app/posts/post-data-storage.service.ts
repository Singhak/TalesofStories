import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PostDataStorageService {

  constructor(private firestore: AngularFirestore) { }

  createPost(data) {
    return this.firestore.collection('Posts').add(data);
  }


  getPosts() {
    return this.firestore.collection('Posts').snapshotChanges();
  }

  updatePost(data) {
    return this.firestore
      .collection('Posts')
      .doc(data.id)
      .set({ completed: true }, { merge: true });
  }

  deletePost(recordId) {
    return this.firestore
      .collection('Posts')
      .doc(recordId)
      .delete();
  }
}
