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
      title: 'Epsonstart',
      description: 'Login form per i dati di fatturazione degli utenti che collaborano con la società di consulenza Synergica.tech. Creato utilizzando Angular e Angular Material!',
      image: 'assets/projects/epsonstart.jpg',
      technologies: ['Angular', 'TypeScript', 'Angular Material', 'SCSS'],
      link: 'https://github.com/lucaevangelista/epsonstart'
    },
    {
      title: 'Portfolio Personale',
      description: 'Il mio portfolio personale creato utilizzando Next.js con il famoso framework React e ottimizzando il CSS grazie a Tailwind CSS!',
      image: 'assets/projects/portfolio.jpg',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'JavaScript'],
      link: 'https://lucaevangelista.com'
    },
    {
      title: 'Bartop Arcade',
      description: 'Cabinet arcade realizzato utilizzando componenti di scarto ottenuti da vecchi computer e pannelli di legno. Un progetto che unisce passione per il gaming e sostenibilità.',
      image: 'assets/projects/arcade.jpg',
      technologies: ['Hardware', 'Raspberry Pi', 'RetroPie', 'Design 3D']
    },
    {
      title: '42 Roma Project',
      description: 'Progetti sviluppati durante il percorso formativo presso 42 Roma Luiss, con focus su algoritmi, strutture dati e programmazione di sistema.',
      image: 'assets/projects/42project.jpg',
      technologies: ['C', 'Shell', 'Algoritmi', 'Docker', 'Networking']
    },
    {
      title: 'E-commerce Dashboard',
      description: 'Dashboard per la gestione di un e-commerce, completa di statistiche, gestione ordini e clienti, e monitoraggio dell\'inventario in tempo reale.',
      image: 'assets/projects/ecommerce.jpg',
      technologies: ['Vue.js', 'Node.js', 'Express', 'MongoDB', 'Chart.js']
    },
    {
      title: 'Social Media App',
      description: 'Applicazione mobile per la condivisione di contenuti multimediali, con funzionalità social come commenti, reazioni e messaggistica privata.',
      image: 'assets/projects/socialapp.jpg',
      technologies: ['Flutter', 'Firebase', 'RESTful API', 'Figma', 'CI/CD']
    }
  ];
} 