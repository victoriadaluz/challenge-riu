import { Component, input } from '@angular/core';
import { Button } from '../../atoms/button/button';
@Component({
  selector: 'app-featured-article',
  imports: [Button],
  templateUrl: './featured-article.html',
  styleUrl: './featured-article.css',
})
export class FeaturedArticle {
  date = input<string>('');
  datetime = input<string>('');
  title = input<string>('Lorem ipsum dolor sit amet.');
  description = input<string>('Lorem impsum dolor sit amet, consectetur adipiscing elit. Donec suscipit auctor dui, at condimentum velit efficitur a. Sed ac felis eget nunc efficitur varius.');
  imageUrl = input<string>('');
  imageAlt = input<string>('Lorem impsum');
  ctaLabel = input<string>('Lorem ipsum');
}
