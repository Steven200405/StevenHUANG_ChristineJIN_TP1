import {Component, Output, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { Footer } from "./footer/footer";
import { Center } from './center/center';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Center],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('StevenChristineTP1');

  public headerColor: string = "";
  public changeColor(){
    this.colorRed="blue";
  }
}
