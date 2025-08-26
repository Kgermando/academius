import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TeamMember {
  id: number;
  name: string;
  position: string;
  bio: string;
  image: string;
  skills: string[];
}

interface Value {
  id: number;
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  
  values: Value[] = [
    {
      id: 1,
      title: 'Excellence',
      description: 'Nous visons l\'excellence dans chaque projet, en dépassant les attentes de nos clients.',
      icon: 'fas fa-award'
    },
    {
      id: 2,
      title: 'Innovation',
      description: 'Nous adoptons les dernières technologies et méthodologies pour offrir des solutions avant-gardistes.',
      icon: 'fas fa-lightbulb'
    },
    {
      id: 3,
      title: 'Collaboration',
      description: 'Le travail d\'équipe et la collaboration sont au cœur de notre approche.',
      icon: 'fas fa-handshake'
    },
    {
      id: 4,
      title: 'Intégrité',
      description: 'Nous agissons avec transparence, honnêteté et respect dans toutes nos interactions.',
      icon: 'fas fa-shield-alt'
    }
  ];

  teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'Sarah Martinez',
      position: 'Directrice Générale',
      bio: 'Plus de 15 ans d\'expérience dans le conseil stratégique et la transformation d\'entreprise.',
      image: '/assets/images/team-1.jpg',
      skills: ['Stratégie', 'Leadership', 'Innovation']
    },
    {
      id: 2,
      name: 'Thomas Dubois',
      position: 'Directeur Technique',
      bio: 'Expert en transformation digitale avec une passion pour les solutions technologiques innovantes.',
      image: '/assets/images/team-2.jpg',
      skills: ['Digital', 'Tech', 'Innovation']
    },
    {
      id: 3,
      name: 'Marie Laurent',
      position: 'Responsable Formation',
      bio: 'Spécialisée dans le développement des compétences et l\'accompagnement des équipes.',
      image: '/assets/images/team-3.jpg',
      skills: ['Formation', 'Coaching', 'RH']
    }
  ];

  ngOnInit() {}

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
