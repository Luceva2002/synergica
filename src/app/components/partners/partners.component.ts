import { Component, AfterViewInit, ElementRef, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Partner {
  name: string;
  logo: string;
  description: string;
}

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements AfterViewInit, OnDestroy {
  partners: Partner[] = [
    {
      name: 'Fendi',
      logo: 'assets/images/partners/fendi.svg',
      description: 'Collaborazione per soluzioni digitali nel settore luxury'
    },
    {
      name: 'Grandi Stazioni',
      logo: 'assets/images/partners/grandi-stazioni.svg',
      description: 'Sviluppo di sistemi di gestione infrastrutturale'
    },
    {
      name: 'RGI',
      logo: 'assets/images/partners/rgi.svg',
      description: 'Soluzioni software per il settore assicurativo'
    },
    {
      name: 'Antin',
      logo: 'assets/images/partners/antin.svg',
      description: 'Consulenza IT per il settore finanziario'
    },
    {
      name: 'Fendi',
      logo: 'assets/images/partners/fendi.svg',
      description: 'Collaborazione per soluzioni digitali nel settore luxury'
    },
    {
      name: 'Grandi Stazioni',
      logo: 'assets/images/partners/grandi-stazioni.svg',
      description: 'Sviluppo di sistemi di gestione infrastrutturale'
    },
    {
      name: 'RGI',
      logo: 'assets/images/partners/rgi.svg',
      description: 'Soluzioni software per il settore assicurativo'
    },
    {
      name: 'Antin',
      logo: 'assets/images/partners/antin.svg',
      description: 'Consulenza IT per il settore finanziario'
    },
    {
      name: 'Fendi',
      logo: 'assets/images/partners/fendi.svg',
      description: 'Collaborazione per soluzioni digitali nel settore luxury'
    },
    {
      name: 'Grandi Stazioni',
      logo: 'assets/images/partners/grandi-stazioni.svg',
      description: 'Sviluppo di sistemi di gestione infrastrutturale'
    }
  ];

  // Riferimento allo ScrollTrigger per pulizia
  private scrollTriggerInstance: ScrollTrigger | null = null;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    // Attendere che il DOM sia completamente renderizzato
    setTimeout(() => {
      this.initHorizontalScroll();
    }, 100);
  }

  ngOnDestroy(): void {
    // Pulizia quando il componente viene distrutto
    if (this.scrollTriggerInstance) {
      this.scrollTriggerInstance.kill();
    }
  }

  private initHorizontalScroll(): void {
    const partnersGrid = this.el.nativeElement.querySelector('#partnersGrid');
    const partnersHeading = this.el.nativeElement.querySelector('.heading');
    const partnersSubheading = this.el.nativeElement.querySelector('.subheading');
    const testimonial = this.el.nativeElement.querySelector('.testimonials');
    
    // Cancella eventuali istanze precedenti
    ScrollTrigger.getAll().forEach(st => {
      if (st.vars.trigger === partnersGrid) {
        st.kill();
      }
    });
    
    // Calcola correttamente la larghezza totale, includendo gap e padding
    let totalWidth = 0;
    const cards = partnersGrid.querySelectorAll('.partner-card');
    
    cards.forEach((card: HTMLElement) => {
      totalWidth += card.offsetWidth;
    });
    
    // Aggiungi il gap tra le card (2rem = 32px per ogni card tranne l'ultima)
    totalWidth += (cards.length - 1) * 32;
    
    // Calcola la distanza di scorrimento
    const containerWidth = partnersGrid.parentElement.clientWidth;
    const scrollDistance = Math.max(0, totalWidth - containerWidth + 100); // +100px per sicurezza
    
    // Nascondi la testimonial prima dell'animazione
    if (testimonial) gsap.set(testimonial, { opacity: 0, display: 'none' });
    
    // Animazione
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: partnersGrid.parentElement,
        start: 'center center',
        end: `+=${scrollDistance + containerWidth * 0.5}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onLeave: () => {
          // Rendi visibile testimonial quando l'animazione è completata
          if (testimonial) gsap.set(testimonial, { opacity: 1, display: 'block', delay: 0.2 });
        }
      }
    });
    
    // Animazione per far salire e scomparire il titolo
    if (partnersHeading && partnersSubheading) {
      tl.to([partnersHeading, partnersSubheading], {
        y: -100,
        opacity: 0,
        duration: 0.3,
        ease: 'power1.in'
      }, 0);
    }
    
    // Animazione per lo scorrimento laterale delle card
    tl.to(partnersGrid, {
      x: -scrollDistance,
      ease: 'none',
      duration: 1
    }, 0.1); // Parte leggermente dopo l'inizio dell'animazione del titolo
    
    // Salva l'istanza per la pulizia
    const st = tl.scrollTrigger;
    if (st) {
      this.scrollTriggerInstance = st as ScrollTrigger;
    }
  }
} 