import { Component, OnInit, ElementRef, ChangeDetectionStrategy, NgZone, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent implements OnInit, OnDestroy {
  private scrollTriggerInstance: ScrollTrigger | null = null;
  private animations: gsap.core.Tween[] = [];
  
  constructor(private el: ElementRef, private ngZone: NgZone) {}
  
  ngOnInit(): void {
    // Esegui le animazioni fuori dalla zona Angular per migliorare le performance
    this.ngZone.runOutsideAngular(() => {
      // Inizializza le animazioni solo dopo che il DOM è completamente caricato
      setTimeout(() => {
        this.initAnimations();
        this.initScrollEffect();
      }, 100);
    });
  }
  
  ngOnDestroy(): void {
    // Pulisci le animazioni quando il componente viene distrutto
    this.animations.forEach(animation => animation.kill());
    
    if (this.scrollTriggerInstance) {
      this.scrollTriggerInstance.kill();
    }
    
    // Rimuovi tutti gli ScrollTrigger associati a questo componente
    ScrollTrigger.getAll().forEach(trigger => {
      if (trigger.vars.trigger === this.el.nativeElement.querySelector('.hero-section')) {
        trigger.kill();
      }
    });
  }

  private initAnimations(): void {
    const words = gsap.utils.toArray('.word');
    
    gsap.set(words, {
      y: 100,
      opacity: 0,
      rotateX: -45
    });

    const mainAnimation = gsap.to(words, {
      duration: 1.2,
      y: 0,
      opacity: 1,
      rotateX: 0,
      stagger: 0.1,
      ease: "elastic.out(1, 0.8)",
      onComplete: () => {
        // Movimento fluttuante continuo
        words.forEach((word: any, i: number) => {
          const animation = gsap.to(word, {
            y: "+=15",
            rotateX: "+=5",
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: i * 0.1
          });
          this.animations.push(animation);
        });
      }
    });
    
    this.animations.push(mainAnimation);
  }

  private initScrollEffect(): void {
    // Seleziona la sezione hero
    const heroSection = this.el.nativeElement.querySelector('.hero-section') as HTMLElement;
    if (!heroSection) return;
    
    // Imposta la z-index per assicurarsi che sia sotto gli altri elementi durante lo scroll
    gsap.set(heroSection, { 
      zIndex: 1,
      willChange: 'transform, opacity'
    });
    
    // Crea un timeline con un'animazione definitiva dello hero
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroSection,
        start: 'top top',
        end: '+=100%',
        scrub: 0.5,
        onLeave: () => {
          // Quando l'utente ha scrollato oltre l'hero, imposta la posizione a absolute
          // e lo z-index a -1 per rimuoverlo completamente dal flusso
          gsap.set(heroSection, { 
            position: 'absolute', 
            zIndex: -1,
            pointerEvents: 'none', // Disabilita le interazioni con l'elemento
            visibility: 'hidden' // Nasconde completamente l'elemento
          });
        },
        onEnterBack: () => {
          // Imposta che anche tornando indietro, l'hero resta nascosto
          // Questo previene qualsiasi glitch o riapparizione
          return false;
        }
      }
    });
    
    // Aggiungi l'animazione di scomparsa
    tl.to(heroSection, {
      opacity: 0,
      y: '-100%',
      scale: 0.8,
      duration: 1,
      ease: 'power2.inOut'
    });
    
    // Configura la sezione successiva per sovrapporsi all'hero
    const nextSection = this.el.nativeElement.nextElementSibling;
    if (nextSection) {
      gsap.set(nextSection, { 
        position: 'relative',
        zIndex: 2, // Z-index maggiore dell'hero
        background: 'var(--background)' // Assicura che abbia uno sfondo che copre
      });
    }
    
    // Salva l'istanza per la pulizia
    this.scrollTriggerInstance = ScrollTrigger.getAll().find(
      trigger => trigger.vars.trigger === heroSection
    ) || null;
  }
} 