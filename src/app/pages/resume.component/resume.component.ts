import { Component } from '@angular/core';
import {
  EDUCATION,
  EXPERIENCE,
  LANGUAGES,
  PROFILE,
  SKILL_GROUPS,
  SKILL_LEVEL_LABEL,
  SOFT_SKILLS,
} from '../../core/portfolio.data';
import { Icon, IconName } from '../../shared/icon/icon';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-resume',
  imports: [Icon, RevealDirective],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss',
})
export class ResumeComponent {
  protected readonly profile = PROFILE;
  protected readonly experience = EXPERIENCE;
  protected readonly education = EDUCATION;
  protected readonly skillGroups = SKILL_GROUPS;
  protected readonly levelLabel = SKILL_LEVEL_LABEL;
  protected readonly softSkills = SOFT_SKILLS;
  protected readonly languages = LANGUAGES;
  protected readonly levels = [1, 2, 3];
  protected readonly educationIcons: IconName[] = ['graduation', 'book', 'code'];

  protected readonly facts = [
    { label: 'Studium', value: 'BSc AI & Machine Learning, HSLU' },
    { label: 'Abschluss', value: 'Informatiker EFZ' },
    { label: 'Aktuell', value: 'Full-Stack Developer bei EVO' },
    { label: 'Wohnort', value: PROFILE.location },
  ];
}
