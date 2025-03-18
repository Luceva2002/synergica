import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="services-section" id="servizi">
      <div class="services-parallax"></div>
      <div class="services-content">
        <h2 class="section-title">I Nostri Servizi</h2>
        <div class="services-grid">
          <div class="service-card" *ngFor="let service of services">
            <div class="service-icon">
              <i [class]="service.icon"></i>
            </div>
            <h3 class="service-title">{{ service.title }}</h3>
            <p class="service-description">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit, AfterViewInit {
  services = [
    {
      title: 'Sviluppo Web',
      description: 'Realizziamo siti web moderni, responsive e ottimizzati per i motori di ricerca.',
      icon: 'fa-solid fa-code'
    },
    {
      title: 'Sviluppo Mobile',
      description: 'Creiamo applicazioni native e ibride per iOS e Android con tecnologie all\'avanguardia.',
      icon: 'fa-solid fa-mobile-screen'
    },
    {
      title: 'UI/UX Design',
      description: 'Progettiamo interfacce intuitive e user-friendly per migliorare l\'esperienza utente.',
      icon: 'fa-solid fa-palette'
    },
    {
      title: 'Consulenza IT',
      description: 'Offriamo consulenza strategica per implementare le migliori soluzioni tecnologiche.',
      icon: 'fa-solid fa-lightbulb'
    },
    {
      title: 'eCommerce',
      description: 'Sviluppiamo piattaforme di commercio elettronico personalizzate e scalabili.',
      icon: 'fa-solid fa-cart-shopping'
    },
    {
      title: 'Cloud Solutions',
      description: 'Implementiamo soluzioni cloud sicure, scalabili e ad alte prestazioni.',
      icon: 'fa-solid fa-cloud'
    }
  ];

  constructor(private el: ElementRef) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initParallaxEffect();
    this.initServiceCardsAnimation();
  }

  private initParallaxEffect(): void {
    // Crea l'effetto parallax che copre l'hero quando si scorre
    gsap.fromTo(
      '.services-parallax',
      {
        y: '100%',
        opacity: 0
      },
      {
        y: '0%',
        opacity: 1,
        scrollTrigger: {
          trigger: '.services-section',
          start: 'top bottom',
          end: 'top 20%',
          scrub: true
        }
      }
    );

    // Scala il contenuto dei servizi
    gsap.fromTo(
      '.services-content',
      {
        y: 100,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: '.services-section',
          start: 'top 80%',
          end: 'top 40%',
          scrub: true
        }
      }
    );
  }

  private initServiceCardsAnimation(): void {
    // Animazione delle service card
    gsap.from('.service-card', {
      y: 50,
      opacity: 0,
      stagger: 0.1,
      duration: 0.6,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.services-grid',
        start: 'top 80%'
      }
    });
  }
} 