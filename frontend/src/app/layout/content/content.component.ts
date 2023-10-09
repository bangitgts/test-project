import { Component, Input } from '@angular/core';
import { Actions, Columns } from 'src/app/utils/global.model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
})
export class ContentComponent {
  @Input() title?: string;
  @Input() columns?: Array<Columns>;
  @Input() actions?: Array<Actions>;
}
