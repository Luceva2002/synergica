import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="title">
          <div class="text-line line-1">
            <span class="decorator small"></span>
            <span class="word" #word1>Trasformiamo</span>
            <span class="decorator"></span>
          </div>
          <div class="text-line line-2">
            <span class="word" #word2>le</span>
            <span class="decorator small"></span>
            <span class="word" #word3>tue</span>
            <span class="decorator large"></span>
            <span class="word accent" #word4>Idee</span>
          </div>
          <div class="text-line line-3">
            <span class="decorator large"></span>
            <span class="word" #word5>in</span>
            <span class="decorator small"></span>
            <span class="word" #word6>soluzioni</span>
          </div>
          <div class="text-line line-4">
            <span class="decorator"></span>
            <span class="word accent" #word7>Innovative</span>
            <span class="decorator small"></span>
          </div>
        </h1>
      </div>
      <div class="parallax-bg"></div>
    </section>
  `,
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, AfterViewInit {
  @ViewChild('word1') word1!: ElementRef;
  @ViewChild('word2') word2!: ElementRef;
  @ViewChild('word3') word3!: ElementRef;
  @ViewChild('word4') word4!: ElementRef;
  @ViewChild('word5') word5!: ElementRef;
  @ViewChild('word6') word6!: ElementRef;
  @ViewChild('word7') word7!: ElementRef;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initHeroAnimation();
  }

  private initHeroAnimation(): void {
    // Animazione per il testo dell'hero
    const words = [
      this.word1.nativeElement,
      this.word2.nativeElement,
      this.word3.nativeElement,
      this.word4.nativeElement,
      this.word5.nativeElement,
      this.word6.nativeElement,
      this.word7.nativeElement
    ];

    const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });
    
    // Animazione iniziale semplificata
    timeline
      .from(words, {
        opacity: 0,
        y: 50,
        duration: 1.2,
        stagger: 0.15
      })
      .from('.decorator', {
        opacity: 0,
        width: 0,
        duration: 0.8,
        stagger: 0.05
      }, '-=0.8')
      .from('.parallax-bg', {
        opacity: 0,
        duration: 1.5
      }, '-=1');
  }
} 