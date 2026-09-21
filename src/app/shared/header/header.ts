import { Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  protected readonly scrolled = signal(false);
  protected readonly menuOpen = signal(false);

  protected readonly navItems = [
    { label: 'Home', path: '/' },
    { label: 'Projekte', path: '/projects' },
    { label: 'Lebenslauf', path: '/resume' },
    { label: 'Über mich', path: '/aboutme' },
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 8);
  }

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
