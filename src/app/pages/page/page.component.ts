import { Component } from '@angular/core';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';
import { TechStackComponent } from '../../components/tech-stack/tech-stack.component';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';
import {
  LucideAngularModule,
  Github,
  Linkedin,
  Twitter,
  Mail,
} from 'lucide-angular';
import { ProjectCardProps } from '../../models/ProjectCardProps';
@Component({
  selector: 'app-page',
  imports: [
    LucideAngularModule,
    ProjectCardComponent,
    TechStackComponent,
    ContactFormComponent,
  ],
  templateUrl: './page.component.html',
})
export class PageComponent {
  readonly github = Github;
  readonly linkedin = Linkedin;
  readonly twitter = Twitter;
  readonly mail = Mail;
  readonly props: ProjectCardProps[] = [
    {
      title: 'E-commerce Platform',
      description:
        'A full-stack e-commerce platform built with Next.js, Prisma, and Stripe integration.',
      image: 'placeholder.svg',
      link: 'https://github.com/OmarLuhan/Ecommerce.git',
      tags: ['Next.js', 'Prisma', 'Stripe'],
    },
    {
      title: 'Task Management App',
      description:
        'A real-time task management application with team collaboration features.',
      image: 'placeholder.svg',
      link: 'https://github.com',
      tags: ['React', 'Node.js', 'Socket.io'],
    },
    {
      title: 'AI Chat Interface',
      description:
        'An AI-powered chat interface with natural language processing capabilities.',
      image: 'placeholder.svg',
      link: 'https://github.com',
      tags: ['OpenAI', 'Next.js', 'TailwindCSS'],
    },
  ];
}
