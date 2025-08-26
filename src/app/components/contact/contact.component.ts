import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

interface ContactInfo {
  icon: string;
  title: string;
  details: string[];
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  isSubmitting = false;
  
  contactInfo: ContactInfo[] = [
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Adresse',
      details: ['123 Avenue des Champs-Élysées', '75008 Paris, France']
    },
    {
      icon: 'fas fa-phone',
      title: 'Téléphone',
      details: ['+33 1 23 45 67 89', '+33 6 12 34 56 78']
    },
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      details: ['contact&#64;academius.com', 'info&#64;academius.com']
    },
    {
      icon: 'fas fa-clock',
      title: 'Horaires',
      details: ['Lun - Ven: 9h00 - 18h00', 'Sam: 9h00 - 12h00']
    }
  ];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[+]?[0-9\s\-\(\)]{10,}$/)]],
      company: [''],
      service: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      
      // Simulation d'envoi du formulaire
      setTimeout(() => {
        console.log('Form submitted:', this.contactForm.value);
        this.isSubmitting = false;
        this.contactForm.reset();
        alert('Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.');
      }, 2000);
    } else {
      this.markFormGroupTouched();
    }
  }

  private markFormGroupTouched() {
    Object.keys(this.contactForm.controls).forEach(key => {
      const control = this.contactForm.get(key);
      control?.markAsTouched();
    });
  }

  getFieldError(fieldName: string): string | null {
    const field = this.contactForm.get(fieldName);
    if (field && field.invalid && field.touched) {
      if (field.errors?.['required']) {
        return 'Ce champ est requis';
      }
      if (field.errors?.['email']) {
        return 'Veuillez entrer une adresse email valide';
      }
      if (field.errors?.['minlength']) {
        return `Minimum ${field.errors?.['minlength'].requiredLength} caractères`;
      }
      if (field.errors?.['pattern']) {
        return 'Format de téléphone invalide';
      }
    }
    return null;
  }
}
