import {
  Component,
  ElementRef,
  afterNextRender,
  computed,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  PROJECT_CATEGORIES,
  PROJECTS,
  Project,
  ProjectCategory,
} from '../../core/portfolio.data';
import { Icon } from '../../shared/icon/icon';
import { ProjectCover } from '../../shared/project-cover/project-cover';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-projects',
  imports: [Icon, ProjectCover, RevealDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly dialog = viewChild.required<ElementRef<HTMLDialogElement>>('dialog');

  protected readonly categories = PROJECT_CATEGORIES;
  protected readonly filter = signal<ProjectCategory | 'alle'>('alle');
  protected readonly selected = signal<Project | null>(null);

  protected readonly projects = computed(() => {
    const filter = this.filter();
    return filter === 'alle' ? PROJECTS : PROJECTS.filter((p) => p.category === filter);
  });

  protected countFor(id: ProjectCategory | 'alle'): number {
    return id === 'alle' ? PROJECTS.length : PROJECTS.filter((p) => p.category === id).length;
  }

  constructor() {
    // Deep-Link von der Startseite (/projects#pv-rechner) öffnet direkt die Detailansicht.
    afterNextRender(() => {
      const project = PROJECTS.find((p) => p.id === this.route.snapshot.fragment);
      if (project) {
        this.open(project);
      }
    });
  }

  open(project: Project): void {
    this.selected.set(project);
    this.dialog().nativeElement.showModal();
  }

  close(): void {
    this.dialog().nativeElement.close();
  }

  onDialogClick(event: MouseEvent): void {
    // Klick auf den abgedunkelten Hintergrund schliesst den Dialog.
    if (event.target === this.dialog().nativeElement) {
      this.close();
    }
  }
}
