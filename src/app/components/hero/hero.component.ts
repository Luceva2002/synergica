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
  private animations: Array<gsap.core.Tween | gsap.core.Timeline> = [];
  
  constructor(private el: ElementRef, private ngZone: NgZone) {}
  
  ngOnInit(): void {
    // Esegui le animazioni fuori dalla zona Angular per migliorare le performance
    this.ngZone.runOutsideAngular(() => {
      // Inizializza le animazioni solo dopo che il DOM è completamente caricato
      setTimeout(() => {
        this.initAnimations();
        this.initDecoratorAnimations();
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
    
    // Imposta lo stato iniziale delle parole
    gsap.set(words, {
      y: 80,
      opacity: 0
    });

    // Animazione di entrata delle parole
    const mainAnimation = gsap.to(words, {
      duration: 0.8,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: "power2.out",
      onComplete: () => {
        // Leggero movimento fluttuante solo per le parole con accento
        const accentWords = document.querySelectorAll('.word.accent');
        accentWords.forEach((word) => {
          const animation = gsap.to(word, {
            y: "+=8",
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
          });
          this.animations.push(animation);
        });
      }
    });
    
    this.animations.push(mainAnimation);
  }

  private initDecoratorAnimations(): void {
    const decorators = document.querySelectorAll('.decorator');
    
    // Imposta lo stato iniziale dei decoratori
    gsap.set(decorators, {
      width: 0,
      opacity: 0
    });
    
    // Anima i decoratori dopo che le parole sono apparse
    setTimeout(() => {
      decorators.forEach((decorator, index) => {
        // Imposta ritardi e durate casuali per un effetto più naturale
        const delay = 0.2 + Math.random() * 0.8;
        const duration = 1 + Math.random() * 1.5;
        const repeatDelay = 1 + Math.random() * 2;
        
        const timeline = gsap.timeline({
          repeat: -1,
          yoyo: true,
          repeatDelay
        });
        
        // Seleziona dimensioni in base alla classe e aggiunge casualità
        let baseWidth = decorator.classList.contains('small') 
          ? 20 
          : decorator.classList.contains('large') 
            ? 70 
            : 50;
        
        // Aggiungi un po' di variazione casuale alla larghezza
        const width = baseWidth + Math.random() * 10 + 'px';
        
        // Applica l'animazione con una sequenza temporale personalizzata
        timeline
          .to(decorator, {
            width,
            opacity: 0.6 + Math.random() * 0.4,
            duration,
            ease: "elastic.out(1, 0.3)",
            delay: index * 0.1 + delay
          })
          .to(decorator, {
            width: "0px",
            opacity: 0,
            duration: 0.8 + Math.random() * 0.7,
            ease: "power2.in",
            delay: 0.3 + Math.random() * 0.5
          }, "+=0.8");
          
        this.animations.push(timeline);
      });
    }, 1200);
  }

  private initScrollEffect(): void {
    // Rimuovi tutti gli ScrollTrigger esistenti
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    
    // Seleziona la sezione hero
    const heroSection = this.el.nativeElement.querySelector('.hero-section') as HTMLElement;
    if (!heroSection) return;
    
    // Setta le proprietà iniziali
    gsap.set(heroSection, { 
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100vh',
      zIndex: 1000,
      visibility: 'visible',
      opacity: 1
    });
    
    // Trova il contenitore di contenuto
    const contentContainer = document.querySelector('.content-container');
    if (!contentContainer) return;
    
    // Assicurati che il contenitore di contenuto sia posizionato correttamente
    gsap.set(contentContainer, {
      position: 'relative',
      zIndex: 5,
      marginTop: '100vh',
      background: 'var(--background)'
    });
    
    // Crea un timeline semplificato per l'animazione di scomparsa dell'hero durante lo scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: contentContainer,
        start: 'top bottom',
        end: 'top top',
        scrub: true,
        onLeave: () => {
          // Quando l'utente ha scrollato oltre l'hero, nascondilo
          gsap.set(heroSection, { 
            position: 'absolute',
            visibility: 'hidden',
            zIndex: -1
          });
        },
        onEnterBack: () => {
          // Quando l'utente torna all'hero, mostralo di nuovo
          gsap.set(heroSection, { 
            position: 'fixed',
            visibility: 'visible',
            zIndex: 1000
          });
          return true;
        }
      }
    });
    
    // Semplice animazione di scomparsa
    tl.to(heroSection, {
      opacity: 0,
      y: -50,
      ease: 'none'
    });
    
    // Salva l'istanza
    this.scrollTriggerInstance = ScrollTrigger.getAll()[0] || null;
  }
} 