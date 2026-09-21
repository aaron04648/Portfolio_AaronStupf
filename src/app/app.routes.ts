import { Routes } from '@angular/router';
import { AboutMeComponent } from './pages/about-me.component/about-me.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ResumeComponent } from './pages/resume.component/resume.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Aaron Stupf – Portfolio',
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    title: 'Projekte – Aaron Stupf',
  },
  {
    path: 'resume',
    component: ResumeComponent,
    title: 'Lebenslauf – Aaron Stupf',
  },
  {
    path: 'aboutme',
    component: AboutMeComponent,
    title: 'Über mich – Aaron Stupf',
  },
  { path: '**', redirectTo: '' },
];
