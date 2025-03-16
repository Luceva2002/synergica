import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Digital Cassa',
      description: 'Sistema di gestione digitale per la cassa integrato con soluzioni di pagamento elettronico e gestione magazzino.',
      image: 'assets/vettoriali.svg',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Docker'],
      link: 'https://digital-cassa.synergica.it'
    },
    {
      title: 'Retail Share',
      description: 'Piattaforma di condivisione e gestione per il settore retail con analisi dati in tempo reale.',
      image: 'assets/vettoriali.svg',
      technologies: ['React', 'Python', 'AWS', 'Kubernetes']
    },
    {
      title: 'Event Booking Tool',
      description: 'Sistema di prenotazione eventi con gestione automatizzata e integrazione calendario.',
      image: 'assets/vettoriali.svg',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Redis']
    },
    {
      title: 'Sicurezza 4.0',
      description: 'Piattaforma per la gestione della sicurezza aziendale con monitoraggio in tempo reale.',
      image: 'assets/vettoriali.svg',
      technologies: ['Angular', 'Spring Boot', 'PostgreSQL', 'Elasticsearch']
    }
  ];
} 