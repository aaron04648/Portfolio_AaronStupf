import { Routes } from '@angular/router';
import { AboutMeComponent } from './pages/about-me.component/about-me.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ResumeComponent } from './pages/resume.component/resume.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'projects',
    component: ProjectsComponent,
  },
  {
    path: 'resume',
    component: ResumeComponent,
  },
  {
    path: 'aboutme',
    component: AboutMeComponent,
  },
];
