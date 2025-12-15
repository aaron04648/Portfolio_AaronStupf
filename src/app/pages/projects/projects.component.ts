import { Component } from '@angular/core';

interface Project {
  title: string;
  desc: string;
  tech: string[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'E-Commerce Dashboard',
      desc: 'Ein Dashboard zur Verwaltung von Produkten und Bestellungen mit Echtzeit-Updates.',
      tech: ['Angular', 'RxJS', 'SCSS'],
    },
    {
      title: 'Task Manager API',
      desc: 'Backend Service für eine Todo-Applikation mit Authentifizierung.',
      tech: ['Node.js', 'NestJS', 'MongoDB'],
    },
    {
      title: 'Portfolio V1',
      desc: 'Meine erste Portfolio Seite. Fokus auf Performance und Accessibility.',
      tech: ['HTML', 'CSS', 'JavaScript'],
    },
  ];
}
