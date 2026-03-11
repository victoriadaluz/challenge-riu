import { Component, input, output} from '@angular/core';
import { NgClass } from '@angular/common';
export type ButtonVariant = 'primary' | 'secondary';
export type ButtonType = 'button' | 'submit' | 'reset';
@Component({
  selector: 'app-button',
  imports: [NgClass],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  label = input.required<string>();
  variant = input<ButtonVariant>('primary');
  type = input<ButtonType>('button');
  disabled = input<boolean>(false);
  ariaLabel = input<string>('');

  clicked = output<void>();

  onClick() {
    if (!this.disabled()) {
      this.clicked.emit();
    }
  }
}
