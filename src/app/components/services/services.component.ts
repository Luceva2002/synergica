import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="services" class="services-section">
      <div class="container">
        <div class="section-header">
          <h2 class="heading">I Nostri Servizi</h2>
          <p class="subheading">Soluzioni innovative per il tuo business</p>
        </div>

        <div class="services-grid">
          <a href="#contact" class="service-card" *ngFor="let service of services">
            <div class="card-content">
              <div class="icon-wrapper">
                <i [class]="service.icon"></i>
              </div>
              <h3>{{service.title}}</h3>
              <p>{{service.description}}</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  services = [
    {
      icon: 'fas fa-code',
      title: 'Sviluppo Web',
      description: 'Creiamo siti web moderni e applicazioni web performanti utilizzando le ultime tecnologie.'
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'App Mobile',
      description: 'Sviluppiamo applicazioni mobile native e cross-platform per iOS e Android.'
    },
    {
      icon: 'fas fa-paint-brush',
      title: 'UI/UX Design',
      description: 'Progettiamo interfacce intuitive e coinvolgenti che catturano l\'attenzione degli utenti.'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Digital Marketing',
      description: 'Strategie di marketing digitale per aumentare la visibilità del tuo brand.'
    },
    {
      icon: 'fas fa-cloud',
      title: 'Cloud Solutions',
      description: 'Soluzioni cloud scalabili e sicure per la tua infrastruttura aziendale.'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Cyber Security',
      description: 'Protezione avanzata e consulenza per la sicurezza dei tuoi dati e sistemi.'
    }
  ];

  ngOnInit() {
    this.initAnimations();
  }

  private initAnimations() {
    gsap.from('.service-card', {
      scrollTrigger: {
        trigger: '.services-grid',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      },
      y: 60,
      opacity: 0,
      duration: 0.8,
      stagger: {
        amount: 0.6,
        from: 'start'
      },
      ease: 'power3.out'
    });
  }
} 