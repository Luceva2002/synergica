import { Injectable } from '@angular/core';
import { gsap } from 'gsap';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {
  constructor() {}

  animateMenuItems() {
    const menuItems = document.querySelectorAll('.menu-items a');
    gsap.fromTo(menuItems, 
      {
        y: 30,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out'
      }
    );
  }

  animateHeroSection(elementRef: any) {
    const heroElements = elementRef.nativeElement.querySelectorAll('.animate-hero');
    gsap.fromTo(heroElements,
      {
        y: 50,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
      }
    );
  }

  // ... existing code ...
} 