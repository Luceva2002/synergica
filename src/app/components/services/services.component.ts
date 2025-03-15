import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services: Service[] = [
    {
      icon: 'code',
      title: 'Sviluppo Software',
      description: 'Sviluppiamo soluzioni software personalizzate utilizzando le più moderne tecnologie e best practices.'
    },
    {
      icon: 'cloud',
      title: 'Cloud & DevOps',
      description: 'Implementiamo e gestiamo infrastrutture cloud scalabili e sicure con approccio DevOps.'
    },
    {
      icon: 'mobile',
      title: 'App Mobile',
      description: 'Creiamo applicazioni mobile native e cross-platform per iOS e Android.'
    },
    {
      icon: 'consulting',
      title: 'Consulenza IT',
      description: 'Offriamo consulenza strategica per la trasformazione digitale della tua azienda.'
    },
    {
      icon: 'security',
      title: 'Cybersecurity',
      description: 'Proteggiamo i tuoi sistemi e dati con soluzioni di sicurezza all\'avanguardia.'
    },
    {
      icon: 'data',
      title: 'Data Analytics',
      description: 'Trasformiamo i tuoi dati in insights strategici per il business.'
    }
  ];
} 