import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  contactForm: FormGroup;
  submitted = false;
  loading = false;
  message = '';
  messageType = ''; // 'success' or 'error'

  // Convenience getter for easy access to form fields
  get f() {
    return this.contactForm.controls;
  }

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit() {
    this.submitted = true;
    this.message = '';
    this.messageType = '';

    // Stop here if form is invalid
    if (this.contactForm.invalid) {
      return;
    }

    this.loading = true;
    this.submitForm();
  }

  submitForm() {
    // Simulate API call
    setTimeout(() => {
      // In a real app, you would call your service here:
      // this.contactService.sendMessage(this.contactForm.value).subscribe({
      //   next: () => this.handleSuccess(),
      //   error: (err) => this.handleError(err.message)
      // });

      // For demo purposes, we'll randomly succeed or fail
      const isSuccess = Math.random() > 0.3;
      if (isSuccess) {
        this.handleSuccess();
      } else {
        this.handleError('Failed to send message. Please try again later.');
      }
    }, 1000);
  }

  handleSuccess() {
    this.message = 'Your message has been sent successfully!';
    this.messageType = 'success';
    this.contactForm.reset();
    this.submitted = false;
    this.loading = false;
  }

  handleError(error: string) {
    this.message = error || 'An error occurred while sending your message.';
    this.messageType = 'error';
    this.loading = false;
  }
}
