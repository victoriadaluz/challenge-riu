import { Component, input } from '@angular/core';

@Component({
  selector: 'app-article-card',
  imports: [],
  templateUrl: './article-card.html',
  styleUrl: './article-card.css',
  standalone: true,
})
export class ArticleCard {
  articleDate = input<string>('');
  articleDateTime = input<string>('');
  articleTitle = input<string>('');
  articleDescription = input<string>('');
  articleImageUrl = input<string>('');
  articleImageAlt = input<string>('');
}
