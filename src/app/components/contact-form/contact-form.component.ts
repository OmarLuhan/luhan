import { Component, signal } from '@angular/core';
import { CardComponent } from '../ui/card/card.component';
import { LucideAngularModule, Loader } from 'lucide-angular';
@Component({
  selector: 'app-contact-form',
  imports: [CardComponent, LucideAngularModule],
  templateUrl: './contact-form.component.html',
})
export class ContactFormComponent {
  readonly loader = Loader;
  pending = signal<boolean>(false);
  message = signal<string>('');
  public handleSubmit(event: Event): void {
    event.preventDefault();
    this.pending.set(true);
    this.message.set("Thanks for your message! I'll get back to you soon.");
    this.pending.set(false);
  }
}
