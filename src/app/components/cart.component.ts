import { Component, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { Item } from '../models';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }

  _listOfItems!: Item[];
  totalPriceOfItems = 0;

  @Input()
  set listOfItems(listItems: Item[]) {
    this._listOfItems = listItems;
    console.info("listOfItems: " + this._listOfItems.toString());
    this.getTotalPriceOfItems();
  }
  get listOfItems(): Item[] {
    return this._listOfItems;
  }

  @Output()
  deleteItemFromList = new Subject<number>();

  getTotalPriceOfItems() {
    this.totalPriceOfItems = 0;
    for (let item of this._listOfItems) {
      this.totalPriceOfItems += item.totalPrice;
    }
  }

  deleteItem(index: number) {
    this.deleteItemFromList.next(index);
  }

  ngOnInit(): void {
  }

}
