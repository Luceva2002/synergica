import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="projects-section" id="progetti">
      <div class="projects-content">
        <h2 class="section-title">I Nostri Progetti</h2>
        <div class="projects-grid">
          <div class="project-card" *ngFor="let project of projects">
            <div class="project-image">
              <img [src]="project.image" [alt]="project.title">
              <div class="project-overlay">
                <div class="project-actions">
                  <a [href]="project.demoLink" target="_blank" class="project-action-btn">
                    <i class="fa-solid fa-eye"></i> Demo
                  </a>
                  <a [href]="project.codeLink" target="_blank" class="project-action-btn">
                    <i class="fa-solid fa-code"></i> Codice
                  </a>
                </div>
              </div>
            </div>
            <div class="project-info">
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-description">{{ project.description }}</p>
              <div class="project-tech">
                <span class="tech-tag" *ngFor="let tech of project.technologies">{{ tech }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects = [
    {
      title: 'E-commerce Platform',
      description: 'Piattaforma di e-commerce completa con gestione del carrello, pagamenti e area amministrativa.',
      image: 'assets/images/project1.jpg',
      demoLink: '#',
      codeLink: '#',
      technologies: ['Angular', 'Node.js', 'MongoDB']
    },
    {
      title: 'Dashboard Analytics',
      description: 'Dashboard interattiva per la visualizzazione e l\'analisi dei dati aziendali in tempo reale.',
      image: 'assets/images/project2.jpg',
      demoLink: '#',
      codeLink: '#',
      technologies: ['React', 'D3.js', 'Firebase']
    },
    {
      title: 'Mobile Banking App',
      description: 'Applicazione mobile per servizi bancari con autenticazione sicura e transazioni in tempo reale.',
      image: 'assets/images/project3.jpg',
      demoLink: '#',
      codeLink: '#',
      technologies: ['Flutter', 'Spring Boot', 'PostgreSQL']
    },
    {
      title: 'Social Network',
      description: 'Piattaforma social con funzionalità di messaggistica, condivisione di contenuti e analisi.',
      image: 'assets/images/project4.jpg',
      demoLink: '#',
      codeLink: '#',
      technologies: ['Next.js', 'GraphQL', 'AWS']
    },
    {
      title: 'AI Content Generator',
      description: 'Strumento che utilizza l\'intelligenza artificiale per generare contenuti di qualità per blog e social media.',
      image: 'assets/images/project5.jpg',
      demoLink: '#',
      codeLink: '#',
      technologies: ['Python', 'TensorFlow', 'FastAPI']
    },
    {
      title: 'Smart Home System',
      description: 'Sistema IoT per la gestione intelligente della casa con controllo remoto e automazioni.',
      image: 'assets/images/project6.jpg',
      demoLink: '#',
      codeLink: '#',
      technologies: ['Vue.js', 'MQTT', 'Docker']
    }
  ];

  ngOnInit(): void {
    this.initAnimation();
  }

  initAnimation(): void {
    gsap.from('.project-card', {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.projects-grid',
        start: 'top 80%'
      }
    });
  }
} 