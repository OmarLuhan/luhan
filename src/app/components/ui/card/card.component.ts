import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
})
export class CardComponent {
  class = input<string>();
  style = input<{ [key: string]: string }>({});
}
@Component({
  selector: 'app-card-content',
  imports: [CommonModule],
  templateUrl: './card-content.component.html',
})
export class CardContentComponent {
  class = input<string>();
  style = input<{ [key: string]: string }>({});
}

@Component({
  selector: 'app-card-footer',
  imports: [CommonModule],
  templateUrl: './card-footer.component.html',
})
export class CardFooterComponent {
  class = input<string>();
  style = input<{ [key: string]: string }>({});
}
