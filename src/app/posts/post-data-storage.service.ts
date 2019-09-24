import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostDataStorageService {

  constructor(private firestore: AngularFirestore) { }
  createPost(data) {
    console.log('Create Post: ', data);
    return this.firestore.collection('Posts').add(data);
  }

  getPosts() {
    return this.firestore.collection('Posts').snapshotChanges();
  }

  _updatePost(data) {
    return this.firestore
      .collection('Posts')
      .doc(data.payload.doc.id)
      .set({ completed: true }, { merge: true });
  }

  deleteCoffeeOrder(recordId) {
    return this.firestore
      .collection('Posts')
      .doc(recordId)
      .delete();
  }
}
