import { Component, afterNextRender, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/header/header';
import { Footer } from './shared/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private readonly document = inject(DOCUMENT);

  constructor() {
    // Sanftes Scrollen erst nach dem Seitenaufbau freischalten, damit der
    // Sprung zu einem Anker aus der URL nicht überschrieben wird.
    afterNextRender(() => {
      setTimeout(() => this.document.documentElement.classList.add('is-ready'), 500);
    });
  }
}
