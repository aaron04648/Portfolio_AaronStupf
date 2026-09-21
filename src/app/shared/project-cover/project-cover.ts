import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ProjectTone } from '../../core/portfolio.data';
import { Icon, IconName } from '../icon/icon';

/**
 * Typografisches Projekt-Cover: Farbverlauf + grosses Linien-Icon.
 * Ersetzt Screenshots, die für die meisten Projekte nicht existieren,
 * und gibt dem Raster trotzdem einen einheitlichen, ruhigen Rhythmus.
 */
@Component({
  selector: 'app-project-cover',
  imports: [Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '[class]': "'cover cover--' + tone()" },
  template: `
    <span class="cover__ring cover__ring--1"></span>
    <span class="cover__ring cover__ring--2"></span>
    <app-icon class="cover__icon" [name]="icon()" [stroke]="1.2" />
    @if (label()) {
      <span class="cover__label">{{ label() }}</span>
    }
  `,
  styles: `
    @use 'tokens' as *;

    :host {
      position: relative;
      display: grid;
      place-items: center;
      overflow: hidden;
      aspect-ratio: 16 / 10;
      border-radius: $radius-md;
      color: $color-white;
      isolation: isolate;
    }

    .cover__icon {
      width: 34%;
      max-width: 120px;
      height: auto;
      aspect-ratio: 1;
      filter: drop-shadow(0 8px 24px rgba(0, 0, 0, 0.18));
      transition: transform 0.6s $ease-out-expo;
    }

    :host-context(a:hover) .cover__icon,
    :host-context(button:hover) .cover__icon {
      transform: scale(1.08) rotate(-3deg);
    }

    .cover__ring {
      position: absolute;
      z-index: -1;
      border-radius: 50%;
      border: 1px solid rgba(255, 255, 255, 0.22);
    }

    .cover__ring--1 {
      width: 70%;
      aspect-ratio: 1;
    }

    .cover__ring--2 {
      width: 110%;
      aspect-ratio: 1;
      border-color: rgba(255, 255, 255, 0.12);
    }

    .cover__label {
      position: absolute;
      left: $spacing-4;
      bottom: $spacing-3;
      font-size: $text-xs;
      font-weight: $font-weight-semibold;
      letter-spacing: $letter-spacing-wide;
      text-transform: uppercase;
      opacity: 0.85;
    }

    :host(.cover--purple) { background: radial-gradient(120% 120% at 20% 0%, #b18cff 0%, #7d4cdb 45%, #3a1f7a 100%); }
    :host(.cover--blue) { background: radial-gradient(120% 120% at 20% 0%, #6cb8ff 0%, #0071e3 45%, #003a80 100%); }
    :host(.cover--orange) { background: radial-gradient(120% 120% at 20% 0%, #ffb37a 0%, #f06a1d 45%, #9c3408 100%); }
    :host(.cover--green) { background: radial-gradient(120% 120% at 20% 0%, #8be3a9 0%, #1f9d55 45%, #0b5530 100%); }
    :host(.cover--gold) { background: radial-gradient(120% 120% at 20% 0%, #ffe08a 0%, #e0a100 45%, #8a5a00 100%); }
    :host(.cover--graphite) { background: radial-gradient(120% 120% at 20% 0%, #8e8e93 0%, #3a3a3c 50%, #111113 100%); }
  `,
})
export class ProjectCover {
  readonly tone = input.required<ProjectTone>();
  readonly icon = input.required<IconName>();
  readonly label = input<string>();
}
