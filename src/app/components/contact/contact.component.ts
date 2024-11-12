import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  firstName: string = '';
  lastName: string = '';
  phone: string = '';
  message: string = '';

  onSubmit() {
    alert('Formulario enviado. ¡Enseguida nos ponemos en contacto contigo!');
  }
}