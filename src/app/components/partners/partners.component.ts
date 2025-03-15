import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Partner {
  name: string;
  logo: string;
  description: string;
}

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent {
  partners: Partner[] = [
    {
      name: 'Fendi',
      logo: 'assets/images/partners/fendi.svg',
      description: 'Collaborazione per soluzioni digitali nel settore luxury'
    },
    {
      name: 'Grandi Stazioni',
      logo: 'assets/images/partners/grandi-stazioni.svg',
      description: 'Sviluppo di sistemi di gestione infrastrutturale'
    },
    {
      name: 'RGI',
      logo: 'assets/images/partners/rgi.svg',
      description: 'Soluzioni software per il settore assicurativo'
    },
    {
      name: 'Antin',
      logo: 'assets/images/partners/antin.svg',
      description: 'Consulenza IT per il settore finanziario'
    }
  ];
} 