import { Component, AfterViewInit, ElementRef } from '@angular/core';
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
export class PartnersComponent implements AfterViewInit {
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
    }
  ];

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    this.initHorizontalScroll();
  }

  private initHorizontalScroll(): void {
    const partnersGrid = this.el.nativeElement.querySelector('#partnersGrid');
    gsap.to(partnersGrid, {
      x: () => -(partnersGrid.scrollWidth - partnersGrid.clientWidth) + 'px',
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: partnersGrid,
        start: 'top center',
        end: () => "+=" + (partnersGrid.scrollWidth - partnersGrid.clientWidth),
        scrub: 1,
        pin: true,
        anticipatePin: 1
      }
    });
  }
} 