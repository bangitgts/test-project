import { Component, OnInit } from '@angular/core';
import { getItems } from './item.service';

@Component({
  selector: 'app-item',
  templateUrl: 'item.component.html',
})
export class ItemComponent implements OnInit {
  title = 'Item Manage';
  columns = [
    {
      header: 'Item name',
    },
    {
      header: 'Type',
    },
    {
      header: 'Category',
    },
    {
      header: 'Price',
    },
  ];

  actions = [
    {
      globalAction: true,
      icon: 'plus',
      content: 'Add Item',
      primary: true
    },
    {
      globalAction: false,
      icon: 'edit',
      yellow: true,
    },
    {
      globalAction: false,
      red: true,
      icon: 'trash',
    },
  ];

  ngOnInit() {
    getItems().then((e) => console.log(e));
  }
}
