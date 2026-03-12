import { Component } from '@angular/core';
import { FeaturedArticle } from '../../components/organisms/featured-article/featured-article';
import { ArticlesGrid } from '../../components/organisms/articles-grid/articles-grid';
import { ArticlesService, Article } from '../../core/models/services/articles.service';

@Component({
  selector: 'app-home',
  imports: [FeaturedArticle, ArticlesGrid,],
  templateUrl: './home.html',
  styleUrl: './home.css',
  standalone: true,
})
export class Home {
  private articlesService = new ArticlesService();
  articles: Article[] = this.articlesService.getArticles();
}
