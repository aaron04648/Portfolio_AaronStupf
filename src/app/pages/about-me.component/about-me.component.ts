import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me.component',
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {
  Images: string[] = [
    'aaron_fussball.jpg',
    'aaron_fussball3.jpg',
    'aaron_fussball3.JPEG',
    'aaron.jpg',
    'aaron_gym.jpg',
  ];
  interests = [
    {
      title: 'Fussball',
      desc: 'Aktives Vereinsmitglied seit der Kindheit. Teamwork ist mir wichtig.',
    },
    {
      title: 'Fitness',
      desc: 'Regelmäßiges Krafttraining als Ausgleich zum Programmieren.',
    },
    {
      title: 'Heimat',
      desc: 'Geboren im Wallis',
    },
  ];

  languages = [
    { name: 'Deutsch', level: 'Muttersprache', percent: '100%' },
    { name: 'Englisch', level: 'Sehr gut (C1)', percent: '90%' },
    { name: 'Französisch', level: 'Grundkenntnisse', percent: '30%' },
    { name: 'Spanisch', level: 'Grundkenntnisse', percent: '30%' },
  ];

  currentIndex = 0;

  nextSlide() {
    if (this.currentIndex < this.Images.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.Images.length - 1;
    }
  }
}
