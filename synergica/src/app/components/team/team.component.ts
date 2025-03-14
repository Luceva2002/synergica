import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
}

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {
  teamMembers: TeamMember[] = [
    {
      name: 'Andrea De Sanctis',
      role: 'Founding Partner',
      image: 'assets/images/team/andrea.jpg',
      linkedin: 'https://linkedin.com/in/andrea-de-sanctis'
    },
    {
      name: 'Mario Rossi',
      role: 'Technical Lead',
      image: 'assets/images/team/mario.jpg',
      linkedin: 'https://linkedin.com/in/mario-rossi'
    },
    {
      name: 'Laura Bianchi',
      role: 'Project Manager',
      image: 'assets/images/team/laura.jpg',
      linkedin: 'https://linkedin.com/in/laura-bianchi'
    },
    {
      name: 'Giuseppe Verdi',
      role: 'Senior Developer',
      image: 'assets/images/team/giuseppe.jpg',
      linkedin: 'https://linkedin.com/in/giuseppe-verdi'
    }
  ];
} 