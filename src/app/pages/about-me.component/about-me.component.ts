import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { INTERESTS, LANGUAGES, PROFILE, STORY } from '../../core/portfolio.data';
import { Icon } from '../../shared/icon/icon';
import { RevealDirective } from '../../shared/reveal.directive';
import { SocialLinks } from '../../shared/social-links/social-links';

@Component({
  selector: 'app-about-me',
  imports: [RouterLink, Icon, RevealDirective, SocialLinks],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {
  protected readonly profile = PROFILE;
  protected readonly story = STORY;
  protected readonly interests = INTERESTS;
  protected readonly languages = LANGUAGES;
}
