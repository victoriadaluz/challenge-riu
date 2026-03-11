import { Component } from '@angular/core';
import { FeaturedArticle } from '../../components/organisms/featured-article/featured-article';

@Component({
  selector: 'app-home',
  imports: [FeaturedArticle],
  templateUrl: './home.html',
  styleUrl: './home.css',
  standalone: true,
})
export class Home {}
