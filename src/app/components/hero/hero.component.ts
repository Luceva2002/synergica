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
  private animations: gsap.core.Tween[] = [];
  
  constructor(private el: ElementRef, private ngZone: NgZone) {}
  
  ngOnInit(): void {
    // Esegui le animazioni fuori dalla zona Angular per migliorare le performance
    this.ngZone.runOutsideAngular(() => {
      // Inizializza le animazioni solo dopo che il DOM è completamente caricato
      setTimeout(() => {
        this.initAnimations();
      }, 100);
    });
  }
  
  ngOnDestroy(): void {
    // Pulisci le animazioni quando il componente viene distrutto
    this.animations.forEach(animation => animation.kill());
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
} 