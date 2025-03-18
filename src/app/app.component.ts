import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { HeroComponent } from './components/hero/hero.component';
import { ServicesComponent } from './components/services/services.component';
import { TeamComponent } from './components/team/team.component';
import { PartnersComponent } from './components/partners/partners.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { environment } from '@env/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    ServicesComponent,
    TeamComponent,
    PartnersComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent
  ],
  template: `
    <main>
      <app-hero />
      <app-services />
      <app-team />
      <app-partners />
      <app-projects />
      <app-contact />
    </main>
    <app-footer />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  title = 'Synergica - Soluzioni Digitali Innovative';
  
  constructor(
    private titleService: Title,
    private metaService: Meta
  ) {}
  
  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.metaService.updateTag({ name: 'description', content: 'Trasformiamo le tue idee in soluzioni digitali innovative' });
    
    if (!environment.production) {
      console.log(`Versione dell'applicazione: ${environment.appVersion}`);
    }
  }
}
