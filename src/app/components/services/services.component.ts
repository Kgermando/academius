import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
  color: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent implements OnInit {
  
  services: Service[] = [
    {
      id: 1,
      title: 'Conseil Stratégique',
      description: 'Accompagnement personnalisé pour définir et mettre en œuvre votre stratégie de croissance.',
      icon: 'fas fa-chess-king',
      features: ['Analyse stratégique', 'Plan d\'action', 'Suivi des KPIs', 'Optimisation continue'],
      color: 'blue'
    },
    {
      id: 2,
      title: 'Transformation Digitale',
      description: 'Solutions innovantes pour digitaliser vos processus et améliorer votre efficacité.',
      icon: 'fas fa-rocket',
      features: ['Audit digital', 'Solutions sur mesure', 'Formation équipes', 'Support technique'],
      color: 'purple'
    },
    {
      id: 3,
      title: 'Formation & Développement',
      description: 'Programmes de formation adaptés pour développer les compétences de vos équipes.',
      icon: 'fas fa-graduation-cap',
      features: ['Formations sur mesure', 'E-learning', 'Coaching individuel', 'Certification'],
      color: 'green'
    },
    {
      id: 4,
      title: 'Gestion de Projet',
      description: 'Pilotage expert de vos projets complexes avec méthodologies agiles et éprouvées.',
      icon: 'fas fa-tasks',
      features: ['Méthodologies agiles', 'Suivi en temps réel', 'Gestion des risques', 'Reporting détaillé'],
      color: 'orange'
    },
    {
      id: 5,
      title: 'Analyse & Data',
      description: 'Exploitez vos données pour prendre des décisions éclairées et optimiser vos performances.',
      icon: 'fas fa-chart-bar',
      features: ['Business Intelligence', 'Data Mining', 'Tableaux de bord', 'Prédictions analytiques'],
      color: 'teal'
    },
    {
      id: 6,
      title: 'Innovation & R&D',
      description: 'Stimulez l\'innovation dans votre organisation avec nos méthodes créatives.',
      icon: 'fas fa-lightbulb',
      features: ['Workshops créatifs', 'Prototypage rapide', 'Test & validation', 'Propriété intellectuelle'],
      color: 'pink'
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
