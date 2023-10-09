import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Columns, Actions } from 'src/app/utils/global.model';

@Component({
  selector: 'data-table',
  templateUrl: './data-table.component.html',
})
export class DataTableComponent implements OnInit {
  @Input() columns?: Array<Columns>;
  @Input() actions?: Array<Actions>;

  ngOnInit(): void {
    console.log(this.actions);
    console.log(this.columns);
  }
}
