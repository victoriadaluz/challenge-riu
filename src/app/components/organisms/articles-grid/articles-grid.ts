import { Component, input } from '@angular/core';
import { ArticleCard } from '../../molecules/article-card/article-card';
import { SearchInput } from '../../atoms/search-input/search-input';
import { Article } from '../../../core/models/article.model';

@Component({
  selector: 'app-articles-grid',
  imports: [ArticleCard, SearchInput],
  templateUrl: './articles-grid.html',
  styleUrl: './articles-grid.css',
  standalone: true,
})
export class ArticlesGrid {
  sectionTitle = input<string>('Lorem ipsum dolor sit amet.');
  sectionSubtitle = input<string>(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit auctor dui, at condimentum velit efficitur a. Sed ac felis eget nunc efficitur varius.',
  );
  articles = input<Article[]>([]);
}
