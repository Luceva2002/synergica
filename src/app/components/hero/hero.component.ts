import { Component, OnInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  constructor(private el: ElementRef) {}
  
  ngOnInit(): void {
    this.initAnimations();
    this.initParallax();
  }

  private initAnimations(): void {
    const words = gsap.utils.toArray('.word');
    
    gsap.set(words, {
      y: 100,
      opacity: 0,
      rotateX: -45
    });

    gsap.to(words, {
      duration: 1.2,
      y: 0,
      opacity: 1,
      rotateX: 0,
      stagger: 0.1,
      ease: "elastic.out(1, 0.8)",
      onComplete: () => {
        // Movimento fluttuante continuo
        words.forEach((word: any, i: number) => {
          gsap.to(word, {
            y: "+=15",
            rotateX: "+=5",
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: i * 0.1
          });
        });
      }
    });
  }

  private initParallax(): void {
    // Effetto parallax per il testo dell'hero durante lo scroll
    gsap.to('.text-wrapper', {
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: '+=100%',
        scrub: true,
        pin: true // Mantiene l'hero fisso durante lo scroll
      },
      y: '-25%',
      scale: 0.8,
      opacity: 0,
      ease: 'none'
    });

    // Effetto per la sezione successiva
    const nextSection = this.el.nativeElement.nextElementSibling;
    if (nextSection) {
      gsap.from(nextSection, {
        scrollTrigger: {
          trigger: nextSection,
          start: 'top bottom',
          end: 'top top',
          scrub: true
        },
        y: '20%',
        ease: 'none'
      });
    }

    // Effetto particelle in background
    gsap.to('.parallax-bg', {
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: '+=100%',
        scrub: true
      },
      y: '40%',
      opacity: 0,
      ease: 'none'
    });
  }
} 