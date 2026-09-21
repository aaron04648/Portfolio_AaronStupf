import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PROFILE, PROJECTS } from '../../core/portfolio.data';
import { CountUpDirective } from '../../shared/count-up.directive';
import { Icon, IconName } from '../../shared/icon/icon';
import { ProjectCover } from '../../shared/project-cover/project-cover';
import { RevealDirective } from '../../shared/reveal.directive';
import { SocialLinks } from '../../shared/social-links/social-links';

@Component({
  selector: 'app-home',
  imports: [RouterLink, RevealDirective, CountUpDirective, Icon, ProjectCover, SocialLinks],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  protected readonly profile = PROFILE;
  protected readonly featured = PROJECTS.filter((p) => p.featured);
  protected readonly hackstair = PROJECTS.find((p) => p.id === 'hackstair-2025')!;

  protected readonly stats = [
    { value: new Date().getFullYear() - 2020, suffix: '', label: 'Jahre in der Informatik' },
    { value: 6, suffix: '', label: 'Stationen in Lehre und Beruf' },
    { value: PROJECTS.length, suffix: '', label: 'Projekte umgesetzt' },
    { value: 1, suffix: '.', label: 'Platz am HackStair 2025' },
  ];

  protected readonly strengths: { icon: IconName; title: string; text: string; tags: string[] }[] = [
    {
      icon: 'sparkle',
      title: 'KI & Data',
      text: 'Chatbots mit RAG, eigene Modelle mit TensorFlow und Datenanalyse mit Python – im Studium und in echten Kundenprojekten.',
      tags: ['Python', 'OpenAI API', 'RAG', 'Pandas'],
    },
    {
      icon: 'code',
      title: 'Full-Stack Web',
      text: 'Seit der Lehre baue ich Webanwendungen vom Frontend bis zur Datenbank – am liebsten mit Angular und TypeScript.',
      tags: ['Angular', 'TypeScript', 'Node.js', 'Firebase'],
    },
    {
      icon: 'shield',
      title: 'Infrastruktur & Security',
      text: 'Bei der Lonza habe ich Netzwerke aufgebaut und Firewalls konfiguriert – ich weiss, worauf Software am Ende läuft.',
      tags: ['Netzwerk', 'Firewalls', 'Docker', 'Git'],
    },
  ];
}
