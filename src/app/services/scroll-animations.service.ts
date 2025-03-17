import { Injectable } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Injectable({
  providedIn: 'root'
})
export class ScrollAnimationsService {
  constructor() {}

  initScrollAnimations() {
    // Animazione per i titoli e sottotitoli
    gsap.utils.toArray('.heading, .subheading').forEach((element: any) => {
      gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      });
    });

    // Animazioni diverse per ogni sezione
    gsap.utils.toArray('section').forEach((section: any, i: number) => {
      const content = section.querySelector('.container');
      const cards = section.querySelectorAll('.service-card, .project-card, .team-card');
      
      // Effetto 1: Slide Up con Stagger
      if (i % 3 === 0) {
        gsap.from(cards, {
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          },
          y: 100,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out'
        });
      }
      
      // Effetto 2: Scale con Fade
      else if (i % 3 === 1) {
        gsap.from(content, {
          scrollTrigger: {
            trigger: section,
            start: 'top center',
            toggleActions: 'play none none reverse'
          },
          scale: 0.9,
          opacity: 0,
          duration: 1,
          ease: 'power2.out'
        });

        gsap.from(cards, {
          scrollTrigger: {
            trigger: section,
            start: 'top 60%',
            toggleActions: 'play none none reverse'
          },
          scale: 0.8,
          opacity: 0,
          duration: 0.6,
          stagger: {
            amount: 0.4,
            from: "center"
          },
          ease: 'back.out(1.4)'
        });
      }
      
      // Effetto 3: Slide Laterale
      else {
        const direction = i % 2 === 0 ? 1 : -1;
        
        gsap.from(content, {
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          },
          x: 100 * direction,
          opacity: 0,
          duration: 1,
          ease: 'power2.out'
        });

        gsap.from(cards, {
          scrollTrigger: {
            trigger: section,
            start: 'top 60%',
            toggleActions: 'play none none reverse'
          },
          x: 50 * direction,
          opacity: 0,
          duration: 0.8,
          stagger: {
            each: 0.1,
            from: direction > 0 ? "start" : "end"
          },
          ease: 'power2.out'
        });
      }

      // Effetto Parallasse per lo sfondo
      if (section.querySelector('.section-background')) {
        gsap.to(section.querySelector('.section-background'), {
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
          },
          y: '20%',
          ease: 'none'
        });
      }
    });

    // Effetto di transizione veloce
    let lastScrollTop = 0;
    
    ScrollTrigger.create({
      trigger: 'body',
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        const scrollTop = window.pageYOffset;
        const scrollDirection = scrollTop > lastScrollTop ? 1 : -1;
        const velocity = Math.abs(scrollTop - lastScrollTop);
        
        if (velocity > 60) {
          const sections = document.querySelectorAll('section');
          sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
            
            if (isVisible) {
              gsap.to(section, {
                scale: 0.98,
                duration: 0.2,
                ease: 'power1.out',
                overwrite: true,
                onComplete: () => {
                  gsap.to(section, {
                    scale: 1,
                    duration: 0.3,
                    ease: 'power2.out'
                  });
                }
              });
            }
          });
        }
        
        lastScrollTop = scrollTop;
      }
    });
  }
} 