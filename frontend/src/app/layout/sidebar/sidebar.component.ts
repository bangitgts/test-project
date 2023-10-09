import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Columns } from 'src/app/utils/global.model';

@Component({
  selector: 'app-side-bar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SideBarComponent {
  collapsed = true;
  @Input() title?: string;
  @Input() columns?: Array<Columns>;
  @Input() actions?: Array<Actions>;
  
  constructor(private router: Router) {}
  onCollapsed(): void {
    this.collapsed = !this.collapsed;
  }
  componentNow = this.router?.config[0]?.component;
}
