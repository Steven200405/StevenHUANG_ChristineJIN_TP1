import { Component, EventEmitter, Output } from '@angular/core';
import { Logo } from '../logo/logo';

@Component({
  selector: 'app-center',
  imports: [Logo],
  templateUrl: './center.html',
  styleUrl: './center.scss'
})
export class Center {
  @Output() color: EventEmitter<string> = new EventEmitter<string>();

  onColorChange(colorSelected: string): void {
    this.color.emit(colorSelected);
  }
}
