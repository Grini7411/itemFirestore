import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { Item } from "../../models/item";
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  itemCollection:AngularFirestoreCollection<Item>;
  private items:Observable<Item[]>;


  constructor(public afs:AngularFirestore) {
    // this.items = this.afs.collection('items').valueChanges();

    this.itemCollection = this.afs.collection('items');

    this.items = this.itemCollection.snapshotChanges().pipe(map(changes=>{
      return changes.map(a=>{
        const data = a.payload.doc.data() as Item;
        data.id = a.payload.doc.id;
        return data;
      })
    }))
    
   }
//getter for items
  getItems():Observable<Item[]>{
    return this.items;
  }
  addItem(item: Item) {
     this.itemCollection.add(item);
  }

  
}

