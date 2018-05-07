import { Component,  OnInit } from '@angular/core';
import { Listing } from '../listing.model';
import { Router } from '@angular/router';
import { ListingsService } from '../listings.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-furniture',
  templateUrl: './furniture.component.html',
  styleUrls: ['./furniture.component.css'],
  providers: [ListingsService]
})
export class FurnitureComponent implements OnInit {

listings: FirebaseListObservable<any[]>;

constructor(private router: Router, private listingsService: ListingsService) {}

ngOnInit(){
  this.listings = this.listingsService.getListings();
}


}
