import { Component, Input } from '@angular/core';

type TypeButton = 'primary' | 'basic' | 'secondary' | '';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() content?: string;
  @Input() type?: TypeButton;
  @Input() loading?: boolean;
  @Input() icon?: string;

  @Input() primary?: boolean;
  @Input() red?: boolean;
  @Input() yellow?: boolean;
  @Input() onClick?: any;
}
