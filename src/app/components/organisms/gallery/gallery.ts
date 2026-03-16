import { Component, input} from '@angular/core';
import { GalleryItem } from '../../../core/models/gallery-item.model';
@Component({
  selector: 'app-gallery',
  imports: [],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
  standalone: true
})
export class Gallery {
  sectionMainTitle = input<string>('');
  sectionDescription = input<string>('');
  items = input<GalleryItem[]>([]);
}
