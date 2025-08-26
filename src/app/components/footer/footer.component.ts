import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FooterLink {
  label: string;
  url: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {
  
  currentYear = new Date().getFullYear();
  
  footerSections: FooterSection[] = [
    {
      title: 'Services',
      links: [
        { label: 'Conseil Stratégique', url: '#services' },
        { label: 'Transformation Digitale', url: '#services' },
        { label: 'Formation & Développement', url: '#services' },
        { label: 'Gestion de Projet', url: '#services' },
        { label: 'Analyse & Data', url: '#services' }
      ]
    },
    {
      title: 'Entreprise',
      links: [
        { label: 'À Propos', url: '#about' },
        { label: 'Notre Équipe', url: '#about' },
        { label: 'Nos Valeurs', url: '#about' }, 
        { label: 'Contact', url: '#contact' }
      ]
    },
    {
      title: 'Ressources',
      links: [
        { label: 'Blog', url: '#' },
        { label: 'Livre Blanc', url: '#' },
        { label: 'Études de Cas', url: '#' },
        { label: 'FAQ', url: '#' },
        { label: 'Support', url: '#' }
      ]
    },
    {
      title: 'Légal',
      links: [
        { label: 'Mentions Légales', url: '#' },
        { label: 'Politique de Confidentialité', url: '#' },
        { label: 'Conditions d\'Utilisation', url: '#' },
        { label: 'Cookies', url: '#' },
        { label: 'RGPD', url: '#' }
      ]
    }
  ];

  ngOnInit() {}

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
