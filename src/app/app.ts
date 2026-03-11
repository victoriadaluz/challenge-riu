import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FeaturedArticle } from './components/organisms/featured-article/featured-article';
import { Button } from './components/atoms/button/button';
import { SearchInput } from './components/atoms/search-input/search-input';
import { Home } from './pages/home/home';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FeaturedArticle, Button, SearchInput, Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('challenge-riu');
}
