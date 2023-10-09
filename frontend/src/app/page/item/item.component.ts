import { Component, OnInit } from '@angular/core';
import { getItems } from './item.service';

@Component({
  selector: 'app-item',
  templateUrl: 'item.component.html',
})
export class ItemComponent implements OnInit {
  loading = false;
  response = {
    totalCounts: 0,
    data: [],
  };
  title = 'Item Manage';
  modalOpen = false;
  columns = [
    {
      header: 'Item name',
      accessor: 'name',
    },
    {
      header: 'Type',
      accessor: 'type',
    },
    {
      header: 'Category',
      accessor: 'category',
    },
    {
      header: 'Price',
      accessor: 'price',
    },
  ];

  loadData = () => {
    this.loading = true;
    getItems()
      .then((e) => (this.response = e?.data))
      .finally(() => {
        this.loading = false;
      });
  };

  onClose = () => {
    this.modalOpen = false;
    getItems().then((e) => (this.response = e?.data));
  };

  actions = [
    {
      globalAction: true,
      icon: 'plus',
      content: 'Add Item',
      primary: true,
      onClick: () => (this.modalOpen = true),
    },
    {
      globalAction: false,
      icon: 'edit',
      yellow: true,
      onClick: (a: any) => console.log(a),
    },
    {
      globalAction: false,
      red: true,
      icon: 'trash',
      onClick: (a: any) => console.log(a),
      //onClick: () => console.log('123'),
    },
  ];
  ngOnInit() {
    this.loadData();
  }
}
