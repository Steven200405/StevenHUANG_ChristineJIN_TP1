import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-logo',
  imports: [],
  templateUrl: './logo.html',
  styleUrl: './logo.scss'
})
export class Logo{
  @Output() clickColor: EventEmitter<string> = new EventEmitter<string>();

  onClickColor (color: string): void {
    this.clickColor.emit(color);
  }
}
