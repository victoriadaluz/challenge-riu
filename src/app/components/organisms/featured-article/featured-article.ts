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
  description = input<string>(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.',
  );
  imageUrl = input<string>('');
  imageAlt = input<string>('Lorem impsum');
  ctaLabel = input<string>('Lorem ipsum');
}
