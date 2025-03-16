import { Component } from '@angular/core';
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
    <app-navbar />
    <main>
      <app-hero />
      <app-services />
      <app-team />
      <app-partners />
      <app-projects />
      <app-contact />
    </main>
    <app-footer />
  `
})
export class AppComponent {
  title = 'Synergica - Soluzioni Digitali Innovative';
}
