import { Injectable } from '@angular/core';
import { Listing } from './listing.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ListingsService {
listings: FirebaseListObservable<any[]>;


constructor(private database: AngularFireDatabase) {
   this.listings = database.list('furniture');
 }

 getListings() {
   return this.listings;
 }


}
