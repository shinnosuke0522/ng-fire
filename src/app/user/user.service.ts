import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './user.model';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userCollection: AngularFirestoreCollection<User>;
  userDoc: AngularFirestoreDocument<User>;

  constructor(private afs:AngularFirestore) { }

  getUsers(){
    this.userCollection = this.afs.collection<User>('users');
    return this.userCollection.valueChanges();
  }

  getUserDetail(id: string) {
    this.userDoc = this.afs.doc<User>('users/${id}')
    return this.userDoc.valueChanges();
  }
}
