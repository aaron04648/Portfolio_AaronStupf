// =============================================================
// Inhalte des Portfolios – zentral gepflegt, damit Home, Projekte,
// Lebenslauf und Über mich immer dieselben Daten zeigen.
// Quelle: Lebenslauf (Stand September 2026).
// =============================================================

import { IconName } from '../shared/icon/icon';

export const PROFILE = {
  name: 'Aaron Stupf',
  role: 'Bachelor Student in Artificial Intelligence & Machine Learning',
  location: 'Luzern',
  portrait: 'aaron-stupf.png',
  github: 'https://github.com/aaron04648',
  linkedin: 'https://www.linkedin.com/in/aaron-stupf/',
};

// ---------- Projekte ----------

export type ProjectCategory = 'ki' | 'web';
export type ProjectTone = 'purple' | 'blue' | 'orange' | 'green' | 'graphite' | 'gold';

export interface Project {
  id: string;
  title: string;
  /** Wo bzw. in welchem Rahmen das Projekt entstanden ist. */
  context: string;
  /** Rolle oder Art des Projekts. */
  role: string;
  period?: string;
  category: ProjectCategory;
  tone: ProjectTone;
  icon: IconName;
  summary: string;
  highlights: string[];
  tech: string[];
  link?: { label: string; url: string };
  featured?: boolean;
}

export const PROJECT_CATEGORIES: { id: ProjectCategory | 'alle'; label: string }[] = [
  { id: 'alle', label: 'Alle' },
  { id: 'ki', label: 'KI & Data' },
  { id: 'web', label: 'Web & Apps' },
];

export const PROJECTS: Project[] = [
  {
    id: 'pv-rechner',
    title: 'Photovoltaik-Rechner',
    context: 'EVO',
    role: 'Full-Stack Developer (20 %)',
    period: 'Seit Nov 2025',
    category: 'web',
    tone: 'green',
    icon: 'sun',
    summary:
      'Ein webbasierter Rechner, der die Energieproduktion von Photovoltaikanlagen visualisiert – die technische Umsetzung einer Bachelor-Thesis in Kollaboration mit dem Bundesamt für Energie.',
    highlights: [
      'Frontend in Angular aufgebaut',
      'Backend aus mehreren Microservices in Python',
      'Technische Umsetzung einer Bachelor-Thesis in Kollaboration mit dem Bundesamt für Energie',
      'Teilzeit und full-remote neben dem Studium',
    ],
    tech: ['Angular', 'TypeScript', 'Python', 'Microservices'],
    featured: true,
  },
  {
    id: 'gemeinde-bitsch',
    title: 'Digitalisierung Gemeinde Bitsch',
    context: 'Gemeinde Bitsch',
    role: 'AI Automation Engineer',
    period: 'Jul – Sep 2026',
    category: 'ki',
    tone: 'orange',
    icon: 'building',
    summary:
      'Mehrere Kleinprojekte, die Abläufe der Gemeindeverwaltung digitalisieren und mit KI automatisieren – vom Helpdesk bis zur Gebührenabrechnung.',
    highlights: [
      'Helpdesk-Software mit KI-Dokumentenscan implementiert',
      'KI-Bot zur Automatisierung von Gemeindeprozessen entwickelt',
      'Reservierungsprozesse für Gemeindelokalitäten automatisiert',
      'Gebührenabläufe durch eine Softwarelösung digitalisiert',
    ],
    tech: ['KI', 'Automatisierung', 'E-Government'],
    featured: true,
  },
  {
    id: 'luzern-geo-chat',
    title: 'Luzern Geo Chat',
    context: 'HSLU · Industrieprojekt',
    role: 'AI Engineer',
    period: 'Feb – Jun 2026',
    category: 'ki',
    tone: 'purple',
    icon: 'chat',
    summary:
      'Ein intelligenter Chatbot für Geodaten, umgesetzt als vergütetes Studentenprojekt. Ausgewählt für ein bezahltes Industrieprojekt, das als Modul durchgeführt wurde.',
    highlights: [
      'Chatbot mit Python und der OpenAI-API entwickelt',
      'RAG-Lösung implementiert und auf Azure Cloud deployt',
      'Ausgewählt für ein bezahltes Industrieprojekt',
    ],
    tech: ['Python', 'OpenAI API', 'RAG', 'Azure'],
    featured: true,
  },
  {
    id: 'hackstair-2025',
    title: 'HackStair 2025',
    context: 'HSLU Hackathon',
    role: 'Sieger',
    period: 'Nov 2025',
    category: 'ki',
    tone: 'gold',
    icon: 'trophy',
    summary:
      'Am Hackathon in Rotkreuz entstand eine Lösung, die Geodaten der Stadt Luzern mithilfe von GPT-Modellen und Vektordatenbanken visualisiert und analysiert – ausgezeichnet mit dem ersten Platz.',
    highlights: [
      'Sieger des HackStair 2025',
      'Geodaten mit GPT-Modellen und Vektordatenbanken analysiert',
      'Ergebnisse mit Pandas und Matplotlib visualisiert',
    ],
    tech: ['Python', 'Uvicorn', 'Pandas', 'Matplotlib', 'Azure Cloud'],
    link: { label: 'Code auf GitHub', url: 'https://github.com/aaron04648/Hackstair25' },
  },
  {
    id: 'smartdoc',
    title: 'SmartDoc Sorter',
    context: 'Privatprojekt',
    role: 'Machine Learning',
    category: 'ki',
    tone: 'purple',
    icon: 'document',
    summary:
      'Ein eigenes, mit TensorFlow trainiertes Modell erkennt, welche Arten von Dokumenten in einer .zip-Datei stecken, und sortiert sie automatisch.',
    highlights: [
      'Eigenes Klassifikationsmodell mit TensorFlow',
      'Automatisches Sortieren von Dokumenten aus .zip-Archiven',
    ],
    tech: ['Python', 'TensorFlow', 'Pandas', 'Hugging Face'],
    link: { label: 'Code auf GitHub', url: 'https://github.com/aaron04648/SmartDoc_Sorter' },
  },
  {
    id: 'amazon-reviewer',
    title: 'Amazon Product Reviewer',
    context: 'Privatprojekt',
    role: 'Data Science',
    category: 'ki',
    tone: 'graphite',
    icon: 'star',
    summary:
      'Mein erstes Python-Projekt: Ein Sentence-Transformer-Modell wertet Produktbewertungen aus einem Kaggle-Datensatz aus.',
    highlights: [
      'Sentence-Transformer-Modell von Hugging Face eingesetzt',
      'Datensatz von Kaggle aufbereitet und visualisiert',
    ],
    tech: ['Python', 'Uvicorn', 'Pandas', 'Matplotlib', 'Hugging Face'],
    link: {
      label: 'Code auf GitHub',
      url: 'https://github.com/aaron04648/Amazon-Product-Reviewer',
    },
  },
  {
    id: 'ohooo-workspace',
    title: 'OHOOO Workspace Manager',
    context: 'OHOOO',
    role: 'Praktikum Webentwicklung',
    period: 'Aug 2023 – Jun 2024',
    category: 'web',
    tone: 'blue',
    icon: 'calendar',
    summary:
      'Ein webbasiertes Reservationssystem, mit dem sich Arbeitsplätze im eigenen Workspace oder Tische im Restaurant verwalten lassen.',
    highlights: [
      'Produkt der Lehrlingswerkstatt OHOOO',
      'Reservation von Arbeitsplätzen und Restauranttischen',
    ],
    tech: ['Angular', 'SCSS', 'Firebase'],
  },
  {
    id: 'ohooo-events',
    title: 'Event-App für die Generation Z',
    context: 'OHOOO',
    role: 'Praktikum Webentwicklung',
    period: 'Aug 2023 – Jun 2024',
    category: 'web',
    tone: 'orange',
    icon: 'phone',
    summary:
      'Im Team eine mobile-first Event-App für die örtliche Zielgruppe der Generation Z entwickelt.',
    highlights: ['Mobile-first Konzept', 'Frontend in Angular, Backend mit Ionic und NestJS'],
    tech: ['Angular', 'Ionic', 'NestJS'],
  },
  {
    id: 'megaphone-cms',
    title: 'CMS für Gemeinden & Firmen',
    context: 'Megaphone Info',
    role: 'Praktikum Webentwicklung',
    period: 'Feb – Jun 2023',
    category: 'web',
    tone: 'blue',
    icon: 'layout',
    summary:
      'Im Team ein Content Management System für Gemeinden und Firmen entwickelt – für Kunden wahlweise als App- oder Webansicht.',
    highlights: [
      'Angular im Frontend, NestJS im Backend',
      'Cross-Platform: App- und Webansicht für Kunden',
    ],
    tech: ['Angular', 'NestJS', 'TypeScript'],
  },
  {
    id: 'thermalbad-signage',
    title: 'Anzeigetafeln für ein Thermalbad',
    context: 'Pomona Media',
    role: 'Praktikum Webentwicklung',
    period: 'Aug – Dez 2022',
    category: 'web',
    tone: 'green',
    icon: 'display',
    summary:
      'Dynamische Anzeigetafeln mit Vue.js für die Neueröffnung eines Thermalbades entwickelt.',
    highlights: ['Digital Signage für die Neueröffnung', 'Dynamische Inhalte mit Vue.js'],
    tech: ['Vue.js', 'JavaScript'],
  },
  {
    id: 'walliser-woerter',
    title: 'Walliser Wörter',
    context: 'Pomona Media',
    role: 'Praktikum Webentwicklung',
    period: '2022',
    category: 'web',
    tone: 'graphite',
    icon: 'book',
    summary: 'Ein Kundenauftrag während meines Praktikums bei Pomona Media.',
    highlights: ['Frontend mit Vue.js', 'Datenhaltung in FileMaker'],
    tech: ['Vue.js', 'FileMaker'],
  },
  {
    id: 'idpa-filmdatenbank',
    title: 'Film-Datenbank (IDPA)',
    context: 'Berufsfachschule',
    role: 'Abschlussarbeit',
    category: 'web',
    tone: 'purple',
    icon: 'film',
    summary:
      'Meine IDPA-Arbeit: eine Datenbank-Anwendung, die den Anwendungsfall von IMDb nachbildet.',
    highlights: ['Datenmodell für Filme und Bewertungen', 'Web-Frontend mit Angular'],
    tech: ['Angular', 'SCSS', 'Firebase'],
  },
  {
    id: 'maturaball',
    title: 'Maturaball Brig 2024',
    context: 'Privatprojekt',
    role: 'Webseite',
    period: '2024',
    category: 'web',
    tone: 'gold',
    icon: 'ticket',
    summary: 'Die Webseite für den Maturaball 2024 in Brig.',
    highlights: ['Event-Webseite mit Angular', 'Hosting über Firebase'],
    tech: ['Angular', 'SCSS', 'Firebase'],
    link: { label: 'Code auf GitHub', url: 'https://github.com/aaron04648/Rana-Maturaball' },
  },
  {
    id: 'portfolio-template',
    title: 'Portfolio Template',
    context: 'Open Source',
    role: 'Template',
    category: 'web',
    tone: 'blue',
    icon: 'code',
    summary: 'Ein Portfolio-Template, das man sich auf meinem GitHub herunterladen kann.',
    highlights: ['Wiederverwendbares Angular-Template', 'Live im Einsatz'],
    tech: ['Angular', 'SCSS', 'Firebase'],
    link: { label: 'Website besuchen', url: 'https://nikeroten.ch' },
  },
];

// ---------- Lebenslauf ----------

export interface TimelineEntry {
  title: string;
  institution: string;
  place: string;
  period: string;
  points: string[];
}

export const EXPERIENCE: TimelineEntry[] = [
  {
    title: 'Full-Stack Developer (20 %)',
    institution: 'EVO',
    place: 'Full-Remote',
    period: 'Seit Nov 2025',
    points: [
      'Webbasierter Rechner zur Visualisierung der Energieproduktion von Photovoltaikanlagen',
      'Frontend in Angular, Backend mit mehreren Microservices in Python',
      'Technische Umsetzung einer Bachelor-Thesis in Kollaboration mit dem Bundesamt für Energie',
    ],
  },
  {
    title: 'IT-Security (100 %)',
    institution: 'Lonza AG',
    place: 'Visp, VS',
    period: 'Nov 2024 – Sep 2025',
    points: [
      'Netzwerke auf dem Produktionsareal aufgebaut, Installationen organisiert, IP-Adressen verwaltet und Switches installiert',
      'Firewalls konfiguriert und Netzwerksicherheit sichergestellt',
    ],
  },
  {
    title: 'Praktikum Webentwicklung (100 %)',
    institution: 'OHOOO',
    place: 'Eyholz, VS',
    period: 'Aug 2023 – Jun 2024',
    points: [
      'Im Team eine mobile-first Event-App für die Generation Z entwickelt',
      'Webbasiertes Reservationssystem für Arbeitsplätze und Restauranttische erstellt',
      'Angular im Frontend, Ionic/NestJS im Backend',
    ],
  },
  {
    title: 'Praktikum Webentwicklung (100 %)',
    institution: 'Megaphone Info',
    place: 'Visp, VS',
    period: 'Feb 2023 – Jun 2023',
    points: [
      'Im Team ein Content Management System für Gemeinden und Firmen entwickelt',
      'Angular im Frontend, NestJS im Backend',
      'App- und Webansicht für Kunden (Cross-Platform)',
    ],
  },
  {
    title: 'Praktikum Webentwicklung (100 %)',
    institution: 'Pomona Media',
    place: 'Visp, VS',
    period: 'Aug 2022 – Dez 2022',
    points: ['Dynamische Anzeigetafeln mit Vue.js für die Neueröffnung eines Thermalbades'],
  },
];

export const EDUCATION: TimelineEntry[] = [
  {
    title: 'BSc Artificial Intelligence & Machine Learning',
    institution: 'Hochschule Luzern (HSLU)',
    place: 'Rotkreuz, ZG',
    period: 'Sep 2025 – Jul 2028',
    points: [
      'Mathematik: Lineare Algebra, Analysis und Statistik',
      'Machine & Deep Learning: überwachtes und unüberwachtes Lernen, neuronale Netze konzipieren und trainieren',
      'Data Science: Datenverarbeitung von der Eingabe bis zur Darstellung',
    ],
  },
  {
    title: 'Informatiker EFZ, Applikationsentwicklung',
    institution: 'Berufsfachschule Oberwallis',
    place: 'Visp, VS',
    period: 'Aug 2020 – Jun 2024',
    points: [
      'Full-Stack Webanwendungen entwickelt und Datenbanken angebunden',
      'Objektorientierte Programmierung in Java',
      'Datenmodelle sowie SQL- und NoSQL-Datenbanken',
      'Multi-User-Anwendungen in verschiedenen Programmiersprachen',
    ],
  },
  {
    title: 'Grundausbildung Softwareentwicklung',
    institution: 'EMVs',
    place: 'Visp, VS',
    period: 'Aug 2020 – Aug 2022',
    points: [
      'Full-Stack Webanwendungen mit HTML, CSS und JavaScript im Frontend',
      'Backend-Logik mit Java, C# und PHP',
    ],
  },
];

/** 3 = sehr gut, 2 = gut, 1 = mittel */
export type SkillLevel = 1 | 2 | 3;

export interface SkillGroup {
  title: string;
  icon: IconName;
  skills: { name: string; level: SkillLevel }[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Webentwicklung',
    icon: 'code',
    skills: [
      { name: 'Angular', level: 3 },
      { name: 'TypeScript', level: 3 },
      { name: 'HTML', level: 3 },
      { name: 'CSS', level: 3 },
      { name: 'Node.js', level: 3 },
    ],
  },
  {
    title: 'Data & AI',
    icon: 'sparkle',
    skills: [
      { name: 'Python', level: 2 },
      { name: 'NumPy', level: 2 },
      { name: 'Pandas', level: 2 },
      { name: 'Matplotlib', level: 1 },
      { name: 'Seaborn', level: 1 },
    ],
  },
  {
    title: 'Datenbanken',
    icon: 'database',
    skills: [
      { name: 'Firebase', level: 2 },
      { name: 'SQL', level: 2 },
      { name: 'MongoDB', level: 1 },
      { name: 'ChromaDB', level: 1 },
    ],
  },
  {
    title: 'Workflow',
    icon: 'branch',
    skills: [
      { name: 'Git', level: 3 },
      { name: 'GitHub', level: 3 },
      { name: 'GitLab', level: 2 },
      { name: 'Docker', level: 2 },
      { name: 'Kubernetes', level: 1 },
      { name: 'ArgoCD', level: 1 },
    ],
  },
];

export const SKILL_LEVEL_LABEL: Record<SkillLevel, string> = {
  3: 'Sehr gut',
  2: 'Gut',
  1: 'Mittel',
};

export const SOFT_SKILLS = {
  social: ['Teamfähig', 'Kommunikationsfähig', 'Empathie', 'Flexibilität'],
  personal: ['Stressresistent', 'Lernbereit', 'Belastbar', 'Analytisches Denken', 'Kritisches Denken'],
};

export const LANGUAGES = [
  { name: 'Deutsch', level: 'Muttersprache', value: 100 },
  { name: 'Englisch', level: 'Gutes Schreib- und Leseverständnis', value: 75 },
  { name: 'Französisch', level: 'Grundlagen', value: 30 },
  { name: 'Spanisch', level: 'Grundlagen', value: 30 },
];

// ---------- Geschichte (Über mich) ----------

export interface StoryChapter {
  year: string;
  title: string;
  place: string;
  text: string;
  tags: string[];
}

export const STORY: StoryChapter[] = [
  {
    year: '2020',
    title: 'Der Anfang',
    place: 'Visp, Wallis',
    text: 'Mit der Lehre als Informatiker EFZ in Applikationsentwicklung beginnt alles. Die ersten zwei Jahre verbringe ich in der Grundausbildung bei EMVs – HTML, CSS und JavaScript im Frontend, Java, C# und PHP im Backend.',
    tags: ['Lehrbeginn', 'EMVs'],
  },
  {
    year: '2022',
    title: 'Raus in die Praxis',
    place: 'Oberwallis',
    text: 'Drei Praktika, drei echte Produkte: Anzeigetafeln für die Neueröffnung eines Thermalbades bei Pomona Media, ein CMS für Gemeinden und Firmen bei Megaphone Info und bei OHOOO eine Event-App und ein Reservationssystem – immer im Team, immer für echte Kundinnen und Kunden.',
    tags: ['Vue.js', 'Angular', 'NestJS'],
  },
  {
    year: '2024',
    title: 'Blick hinter die Kulissen',
    place: 'Lonza AG, Visp',
    text: 'Nach dem Lehrabschluss wechsle ich in die IT-Security der Lonza. Ich baue Netzwerke auf dem Produktionsareal auf, installiere Switches, verwalte IP-Adressen und konfiguriere Firewalls – und lerne, wie Infrastruktur im grossen Massstab funktioniert.',
    tags: ['Informatiker EFZ', 'Netzwerk', 'Security'],
  },
  {
    year: '2025',
    title: 'Der nächste Schritt',
    place: 'HSLU, Rotkreuz',
    text: 'Ich starte das Bachelorstudium in Artificial Intelligence & Machine Learning an der Hochschule Luzern. Im ersten Semester gewinne ich den HackStair-Hackathon – und beginne parallel als Full-Stack Developer bei EVO.',
    tags: ['Studienbeginn', 'HackStair-Sieg', 'EVO'],
  },
  {
    year: '2026',
    title: 'Heute',
    place: 'Luzern',
    text: 'Ich verbinde, was ich gelernt habe: Für den Luzern Geo Chat habe ich eine RAG-Lösung auf Azure gebaut, für die Gemeinde Bitsch automatisiere ich Verwaltungsprozesse mit KI. Solide Software-Architektur trifft moderne KI – genau dort will ich weiterwachsen.',
    tags: ['AI Engineering', 'Automatisierung'],
  },
];

export const INTERESTS: { title: string; text: string; icon: IconName }[] = [
  {
    title: 'Fussball',
    text: 'Aktiv in einem Verein seit der Kindheit. Teamwork ist mir wichtig – auf dem Platz wie im Projekt.',
    icon: 'ball',
  },
  {
    title: 'Fitness',
    text: 'Langjährige Fitnessmitgliedschaft – der Ausgleich zum Programmieren.',
    icon: 'dumbbell',
  },
  {
    title: 'Wallis',
    text: 'Aufgewachsen im Oberwallis, heute zu Hause in der Region Luzern.',
    icon: 'mountain',
  },
];
