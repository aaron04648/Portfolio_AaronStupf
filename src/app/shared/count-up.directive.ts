import {
  Directive,
  ElementRef,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  inject,
  input,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/**
 * Zählt eine Kennzahl hoch, sobald sie in den sichtbaren Bereich scrollt.
 *
 * Der Zielwert steht als Text im Element und wird beim Prerendering unverändert
 * ausgeliefert – ohne JavaScript oder bei reduzierter Bewegung steht dort also
 * sofort die richtige Zahl, nie eine Null.
 *
 *   <span appCountUp [countTo]="30">30</span>
 */
@Directive({
  selector: '[appCountUp]',
})
export class CountUpDirective implements OnInit, OnDestroy {
  readonly countTo = input.required<number>();
  /** Dauer der Animation in Millisekunden. */
  readonly countDuration = input(1400);
  /** Nachkommastellen der Ausgabe. */
  readonly countDecimals = input(0);

  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private observer?: IntersectionObserver;
  private frame?: number;

  ngOnInit(): void {
    if (!this.isBrowser || typeof IntersectionObserver === 'undefined') {
      return;
    }
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const element = this.el.nativeElement as HTMLElement;
    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.observer?.unobserve(element);
            this.run(element);
          }
        }
      },
      { threshold: 0.4 },
    );
    this.observer.observe(element);
  }

  private run(element: HTMLElement): void {
    const target = this.countTo();
    const duration = this.countDuration();
    const decimals = this.countDecimals();
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      // Gleiche Ease-out-Kurve wie die Scroll-Animationen: schnell an, sanft aus.
      const eased = 1 - Math.pow(1 - progress, 3);
      element.textContent = (target * eased).toLocaleString('de-CH', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      });
      if (progress < 1) {
        this.frame = requestAnimationFrame(tick);
      }
    };

    element.textContent = (0).toLocaleString('de-CH', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
    this.frame = requestAnimationFrame(tick);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    if (this.frame !== undefined) {
      cancelAnimationFrame(this.frame);
    }
  }
}
