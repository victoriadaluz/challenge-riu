import { Component, input } from '@angular/core';

@Component({
  selector: 'app-article-card',
  imports: [],
  templateUrl: './article-card.html',
  styleUrl: './article-card.css',
  standalone: true,
})
export class ArticleCard {
  date = input<string>('');
  datetime = input<string>('');
  title = input<string>('');
  description = input<string>('');
  imageUrl = input<string>('');
  imageAlt = input<string>('');
}
