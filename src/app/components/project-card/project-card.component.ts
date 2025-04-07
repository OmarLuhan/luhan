import { Component, input } from '@angular/core';
import { ProjectCardProps } from '../../models/ProjectCardProps';
import { LucideAngularModule, Github } from 'lucide-angular';
import {
  CardComponent,
  CardContentComponent,
  CardFooterComponent,
} from '../ui/card/card.component';

@Component({
  selector: 'app-project-card',
  imports: [
    CardComponent,
    CardContentComponent,
    CardFooterComponent,
    LucideAngularModule,
  ],
  templateUrl: './project-card.component.html',
})
export class ProjectCardComponent {
  props = input<ProjectCardProps>();
  github = Github;
}
