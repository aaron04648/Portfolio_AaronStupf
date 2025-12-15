import { Component } from '@angular/core';

interface TimelineItem {
  title: string; // Rolle oder Abschluss
  institution: string; // Firma oder Schule
  period: string;
  desc: string;
}

@Component({
  selector: 'app-resume',
  standalone: true,
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss',
})
export class ResumeComponent {
  // Daten aus deinem Lebenslauf [cite: 41, 47]
  education: TimelineItem[] = [
    {
      title: 'BSc in Artificial Intelligence & Machine Learning',
      institution: 'HSLU - Hochschule Luzern',
      period: 'Sept 2025 - Juli 2028',
      desc: 'Schwerpunkte: Mathematik (Linear Algebra, Calculus), Machine Learning, Deep Learning und Data Science Projekte.',
    },
    {
      title: 'Informatiker EFZ (Applikationsentwicklung)',
      institution: 'Berufsfachschule Oberwallis Visp',
      period: 'Aug 2020 - Juni 2024',
      desc: 'Web-Entwicklung, Software-Engineering (Java, Spring Boot), Datenbankmanagement (SQL) und OOP.',
    },
  ];

  // Daten aus deinem Lebenslauf [cite: 63, 64, 67, 75, 81, 86]
  experience: TimelineItem[] = [
    {
      title: 'Part-time Fullstack Developer',
      institution: 'EVO (Full-Remote)',
      period: 'Seit Nov 2025',
      desc: 'Entwicklung eines Simulationstools für Photovoltaikanlagen mit Angular und Python.',
    },
    {
      title: 'Full-time IT-Security',
      institution: 'Lonza AG',
      period: 'Nov 2024 - Sept 2025',
      desc: 'Netzwerkinfrastruktur, Firewall-Konfiguration und Cyber-Security Management.',
    },
    {
      title: 'Internship Web Developer',
      institution: 'OHOOO',
      period: 'Aug 2023 - Juni 2024',
      desc: 'Co-Entwicklung einer "Mobile-First" News-App und eines Reservierungssystems (Angular, Ionic).',
    },
    {
      title: 'Internship Web Developer',
      institution: 'Megaphone Info',
      period: 'Feb 2023 - Juni 2023',
      desc: 'Entwicklung eines CMS mit Angular und NestJS. Cross-Platform Publishing.',
    },
    {
      title: 'Internship Web Developer',
      institution: 'Pomona Media',
      period: 'Aug 2022 - Dez 2022',
      desc: 'Entwicklung einer Digital Signage Applikation mit Vue.js.',
    },
    {
      title: 'Software Developer',
      institution: "EMV's",
      period: 'Aug 2020 - Aug 2022',
      desc: 'Ausbildung in Full-Stack Web Development (HTML, CSS, JS, PHP, C#).',
    },
  ];
}
