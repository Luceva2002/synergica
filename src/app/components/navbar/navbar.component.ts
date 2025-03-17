import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { gsap } from 'gsap';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav [class.transparent]="isTransparent" [class.menu-open]="isMenuOpen">
      <div class="nav-content">
        <a href="/" class="logo">
          <span class="logo-text">Synergica</span>
        </a>
        <button 
          class="menu-toggle" 
          [class.active]="isMenuOpen"
          (click)="toggleMenu()"
          aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>

    <div class="menu-overlay" [class.active]="isMenuOpen">
      <div class="menu-background">
        <div class="menu-bg-1"></div>
        <div class="menu-bg-2"></div>
        <div class="menu-bg-3"></div>
      </div>
      <div class="menu-content">
        <div class="menu-items">
          <a href="#hero" (click)="closeMenu()" class="menu-item">
            <span class="menu-item-text">Home</span>
          </a>
          <a href="#services" (click)="closeMenu()" class="menu-item">
            <span class="menu-item-text">Servizi</span>
          </a>
          <a href="#team" (click)="closeMenu()" class="menu-item">
            <span class="menu-item-text">Team</span>
          </a>
          <a href="#partners" (click)="closeMenu()" class="menu-item">
            <span class="menu-item-text">Partner</span>
          </a>
          <a href="#projects" (click)="closeMenu()" class="menu-item">
            <span class="menu-item-text">Progetti</span>
          </a>
          <a href="#contact" (click)="closeMenu()" class="menu-item">
            <span class="menu-item-text">Contatti</span>
          </a>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isMenuOpen = false;
  isTransparent = false;
  private lastScrollTop = 0;
  private timeline: gsap.core.Timeline;

  constructor(private elementRef: ElementRef) {
    this.timeline = gsap.timeline({ paused: true });
  }

  ngOnInit() {
    this.initMenuAnimation();
  }

  private initMenuAnimation() {
    const overlay = this.elementRef.nativeElement.querySelector('.menu-overlay');
    const backgrounds = overlay.querySelectorAll('.menu-background > div');
    const menuItems = overlay.querySelectorAll('.menu-item');
    
    this.timeline
      .set(overlay, { visibility: 'visible' })
      .fromTo(backgrounds, 
        { 
          x: '-100%',
        },
        {
          x: '0%',
          duration: 0.4,
          stagger: 0.1,
          ease: 'power3.inOut'
        }
      )
      .fromTo('.menu-item',
        {
          opacity: 0,
          y: 20
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.05,
          ease: 'power2.out'
        },
        '-=0.2'
      );
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    this.isTransparent = scrollTop > 50;
    
    if (scrollTop > this.lastScrollTop && !this.isMenuOpen) {
      gsap.to('nav', {
        y: '-100%',
        duration: 0.3,
        ease: 'power2.inOut'
      });
    } else {
      gsap.to('nav', {
        y: '0%',
        duration: 0.3,
        ease: 'power2.out'
      });
    }
    this.lastScrollTop = scrollTop;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen) {
      document.body.style.overflow = 'hidden';
      this.timeline.play();
    } else {
      document.body.style.overflow = '';
      this.timeline.reverse();
    }
  }

  closeMenu() {
    if (this.isMenuOpen) {
      this.isMenuOpen = false;
      document.body.style.overflow = '';
      this.timeline.reverse();
    }
  }
} 