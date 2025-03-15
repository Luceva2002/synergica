import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isScrolled = false;
  isMobileMenuOpen = false;

  constructor(private scrollService: ScrollService) {}

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  scrollToSection(sectionId: string) {
    this.scrollService.scrollToElement(sectionId);
    if (this.isMobileMenuOpen) {
      this.isMobileMenuOpen = false;
    }
  }
} 