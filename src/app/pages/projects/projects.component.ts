import { Component } from '@angular/core';

interface Project {
  title: string;
  desc: string;
  img_path: string | undefined;
  tech: string[];
  link: string | undefined;
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
      title: 'Walliser Wörter',
      desc: 'Ein Auftrag an meinem Praktikum in der Pomona Media.',
      img_path: 'walliserworter.PNG',
      tech: ['Vue', 'FileMaker'],
      link: undefined,
    },
    {
      title: 'OHOOO Workspace Mananger',
      desc: 'Produkt der Lehrlingswerkstatt OHOOO. Es ist ein Tool um Plätze des eigenen Workspace oder Restaurants zu managen.',
      img_path: 'space_ohooo.PNG',
      tech: ['Angular', 'SCSS', 'Firebase'],
      link: undefined,
    },
    {
      title: 'Portfolio Template',
      desc: 'Ein Portfolio Template, welches man sich auf meinem Github runterladen kann',
      img_path: 'portfolioTemp.PNG',
      tech: ['Angular', 'SCSS', 'Firebase'],
      link: 'https://nikeroten.ch',
    },
    {
      title: 'IMDB Dupe',
      desc: 'Meine IDPA-Arbeit sollte eine Datenbank darstellen, die den Usecase wie IMDB hat',
      img_path: '',
      tech: ['Angular', 'SCSS', 'Firebase'],
      link: undefined,
    },
    {
      title: 'Maturaball',
      desc: 'Webseite für den Maturaball 2024 Brig',
      img_path: '',
      tech: ['Angular', 'SCSS', 'Firebase'],
      link: 'https://github.com/aaron04648/Rana-Maturaball',
    },
    {
      title: 'Amazon Product Reviewer',
      desc: 'Mein ersten Python Projekt mit einem Sentence Transformer Modell, welches ein kleinen Datensatz von Kaggle verwendet. ',
      img_path: '',
      tech: ['Python', 'Uvicorn', 'Pandas', 'Matplotlib', 'Kaggle', 'Huggingface'],
      link: 'https://github.com/aaron04648/Amazon-Product-Reviewer',
    },
    {
      title: 'Hackaton Projekt Lucerne Geo',
      desc: 'Ein Projekt, welches ich an einer Hackaton in Luzern gemacht habe. Es soll die Geodaten von Luzern visualisieren und analysieren mithilfe GPT-Modelle und Vektordatenbanken.',
      img_path: 'hackstair25.png',
      tech: ['Python', 'Uvicorn', 'Pandas', 'Matplotlib', 'AWS'],
      link: 'https://github.com/aaron04648/Hackstair25',
    },
    {
      title: 'SmartDoc',
      desc: 'Ein Projekt, wo ich mit Tensorflow ein eigenes Modell trainieren will. Es soll erkennen, welche Art von Dokument sind in einem .zip Datei und sortiert sie',
      img_path: '',
      tech: ['Python', 'Uvicorn', 'Pandas', 'Matplotlib', 'Kaggle', 'Huggingface', 'Tensorflow'],
      link: 'https://github.com/aaron04648/SmartDoc_Sorter',
    },
  ];
}
