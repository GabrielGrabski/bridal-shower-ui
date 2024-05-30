import { Component, Input } from '@angular/core';
import { Item } from './interface/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent {
  @Input() sectionType: string = "book";
  @Input() title: string = "";
  @Input() items: Item[] = [
    {
      id: 1,
      name: "Item 1",
      imageName: "item1",
      isBooked: false
    },
    {
      id: 2,
      name: "Item 2",
      imageName: "item2",
      isBooked: false
    },
    {
      id: 3,
      name: "Item 3",
      imageName: "item3",
      isBooked: true
    },
    {
      id: 4,
      name: "Item 4",
      imageName: "item4",
      isBooked: true
    }
  ];
}
