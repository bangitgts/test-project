import { Component, Input, OnInit } from '@angular/core';
import { Actions } from 'src/app/utils/global.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  @Input() title?: string;
  @Input() actions?: Array<Actions>;
  ngOnInit(): void {}
}
