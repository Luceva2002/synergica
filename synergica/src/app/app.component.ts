import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { ServicesComponent } from './components/services/services.component';
import { TeamComponent } from './components/team/team.component';
import { PartnersComponent } from './components/partners/partners.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    HeroComponent,
    ServicesComponent,
    TeamComponent,
    PartnersComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent
  ],
  template: `
    <app-navbar></app-navbar>
    <main>
      <app-hero></app-hero>
      <app-services></app-services>
      <app-team></app-team>
      <app-partners></app-partners>
      <app-projects></app-projects>
      <app-contact></app-contact>
    </main>
    <app-footer></app-footer>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Synergica - Soluzioni Digitali Innovative';
}
