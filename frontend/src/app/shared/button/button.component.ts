import { Component, EventEmitter, Input, Output } from '@angular/core';

type TypeButton = 'primary' | 'basic' | 'secondary' | '';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Output() clickEmit = new EventEmitter<any>();

  @Input() content?: string;
  @Input() type?: TypeButton;
  @Input() loading?: boolean;
  @Input() icon?: string;

  @Input() primary?: boolean;
  @Input() red?: boolean;
  @Input() yellow?: boolean;
  @Input() onClick?: any;

  onABC = () =>{
    console.log('123')
  }
}
