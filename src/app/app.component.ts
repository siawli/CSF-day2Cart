import { Component } from '@angular/core';
import { Item } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day2Cart';

  listOfItems:Item[] = [];

  addItem(item: Item) {
    this.listOfItems = [... this.listOfItems, item];
  }

  deleteItem(index: number) {
    const temp: Item[] = [...this.listOfItems];
    temp.splice(index, 1);
    this.listOfItems = temp;
  }
}
