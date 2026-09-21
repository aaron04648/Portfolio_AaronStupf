import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { PROFILE } from '../../core/portfolio.data';

@Component({
  selector: 'app-social-links',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ul class="social" [class.social--dark]="dark()" aria-label="Profile">
      <li>
        <a [href]="profile.linkedin" target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path
              fill="currentColor"
              d="M20.45 20.45h-3.555v-5.569c0-1.328-.026-3.037-1.851-3.037-1.853 0-2.136 1.446-2.136 2.94v5.666H9.354V9h3.414v1.561h.047c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.284ZM5.34 7.433a2.063 2.063 0 1 1 0-4.126 2.063 2.063 0 0 1 0 4.126ZM7.12 20.45H3.558V9H7.12v11.45ZM22.223 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.452C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.223 0Z"
            />
          </svg>
          <span class="visually-hidden">LinkedIn</span>
        </a>
      </li>
      <li>
        <a [href]="profile.github" target="_blank" rel="noopener noreferrer" title="GitHub">
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path
              fill="currentColor"
              d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.065 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405 1.02 0 2.04.135 3 .405 2.28-1.56 3.3-1.245 3.3-1.245.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z"
            />
          </svg>
          <span class="visually-hidden">GitHub</span>
        </a>
      </li>
    </ul>
  `,
  styles: `
    @use 'tokens' as *;

    .social {
      display: flex;
      gap: $spacing-3;
      list-style: none;
    }

    a {
      display: grid;
      place-items: center;
      width: 44px;
      height: 44px;
      border-radius: 50%;
      background: $color-offwhite;
      color: $color-ink;
      transition: background-color $transition-base, color $transition-base, transform $transition-base;

      &:hover {
        background: $color-ink;
        color: $color-white;
        transform: translateY(-2px);
      }
    }

    .social--dark a {
      background: rgba(255, 255, 255, 0.1);
      color: $color-white;

      &:hover {
        background: $color-white;
        color: $color-black;
      }
    }

    svg {
      width: 18px;
      height: 18px;
    }
  `,
})
export class SocialLinks {
  readonly dark = input(false);
  protected readonly profile = PROFILE;
}
