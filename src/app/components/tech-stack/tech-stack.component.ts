import { Component } from '@angular/core';
import { CardComponent } from '../ui/card/card.component';

@Component({
  selector: 'app-tech-stack',
  imports: [CardComponent],
  templateUrl: './tech-stack.component.html',
})
export class TechStackComponent {
  tecnologies: { category: string; skills: string[] }[] = [
    {
      category: 'Frontend',
      skills: [
        'React',
        'Next.js',
        'TypeScript',
        'TailwindCSS',
        'Redux',
        'GraphQL',
      ],
    },
    {
      category: 'Backend',
      skills: [
        'Node.js',
        'Express',
        'Python',
        'Django',
        'PostgreSQL',
        'MongoDB',
      ],
    },
    {
      category: 'DevOps',
      skills: ['Docker', 'AWS', 'CI/CD', 'Git', 'Linux', 'Nginx'],
    },
    {
      category: 'Tools',
      skills: ['VS Code', 'Postman', 'Figma', 'Jest', 'GitHub', 'Vercel'],
    },
  ];
}
