import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
  features: string[];
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit {
  contactForm: FormGroup;

  services: Service[] = [
    {
      id: 1,
      title: 'Conseil Stratégique',
      description: 'Accompagnement personnalisé pour définir et mettre en œuvre votre stratégie de croissance.',
      icon: 'fas fa-lightbulb',
      color: '#3B82F6',
      features: ['Analyse de marché', 'Plan stratégique', 'Optimisation des processus']
    },
    {
      id: 2,
      title: 'Formation & Développement',
      description: 'Programmes de formation sur mesure pour développer les compétences de vos équipes.',
      icon: 'fas fa-graduation-cap',
      color: '#10B981',
      features: ['Formation technique', 'Leadership', 'Certification professionnelle']
    },
    {
      id: 3,
      title: 'Support Technique',
      description: 'Assistance technique experte pour résoudre vos défis technologiques complexes.',
      icon: 'fas fa-tools',
      color: '#F59E0B',
      features: ['Support 24/7', 'Maintenance préventive', 'Résolution d\'incidents']
    },
    {
      id: 4,
      title: 'Consulting Digital',
      description: 'Transformation digitale complète pour moderniser votre entreprise.',
      icon: 'fas fa-digital-tachograph',
      color: '#EF4444',
      features: ['Digitalisation', 'Automatisation', 'Innovation technologique']
    },
    {
      id: 5,
      title: 'Gestion de Projet',
      description: 'Pilotage et coordination de vos projets les plus ambitieux.',
      icon: 'fas fa-project-diagram',
      color: '#8B5CF6',
      features: ['Planification', 'Suivi en temps réel', 'Gestion des risques']
    },
    {
      id: 6,
      title: 'Audit & Optimisation',
      description: 'Analyse approfondie et recommandations pour améliorer vos performances.',
      icon: 'fas fa-chart-line',
      color: '#06B6D4',
      features: ['Audit complet', 'Recommandations', 'Plan d\'optimisation']
    }
  ];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9+\\-\\s\\(\\)]+$')]],
      company: [''],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }
  
  ngOnInit() {}

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  trackByServiceId(index: number, service: Service): number {
    return service.id;
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Formulaire soumis:', this.contactForm.value);
      alert('Votre message a été envoyé avec succès ! Nous vous recontacterons rapidement.');
      this.contactForm.reset();
    } else {
      console.log('Formulaire invalide');
      this.markFormGroupTouched(this.contactForm);
    }
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      control?.markAsTouched({ onlySelf: true });
    });
  }

  getFieldError(fieldName: string): string {
    const field = this.contactForm.get(fieldName);
    if (field?.errors && field.touched) {
      if (field.errors['required']) return `Ce champ est requis`;
      if (field.errors['email']) return 'Email invalide';
      if (field.errors['minlength']) return `Minimum ${field.errors['minlength'].requiredLength} caractères`;
      if (field.errors['pattern']) return 'Format invalide';
    }
    return '';
  }
}
