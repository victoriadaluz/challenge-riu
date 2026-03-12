import { Component } from '@angular/core';
import { FeaturedArticle } from '../../components/organisms/featured-article/featured-article';
import { Article } from '../../core/models/article.model';
import { ArticlesGrid } from '../../components/organisms/articles-grid/articles-grid';

@Component({
  selector: 'app-home',
  imports: [FeaturedArticle, ArticlesGrid],
  templateUrl: './home.html',
  styleUrl: './home.css',
  standalone: true,
})
export class Home {
  articles: Article[] = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    date: 'Lorem ipsum dolor sit amet.',
    datetime: '2025-03-01',
    title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.',
    imageUrl: '',
    imageAlt: `Image article ${i + 1}`,
  }));
}
