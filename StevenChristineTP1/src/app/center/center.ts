import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-center',
  imports: [],
  templateUrl: './center.html',
  styleUrl: './center.scss'
})
export class Center {
  @Output() color = new EventEmitter();
}
