import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Center } from './center/center';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [NgClass, Header, Footer, Center],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ent');

  public backgroundColor: string = "";

  onColorChange(color: string): void {

    this.backgroundColor = color;
  }
}
