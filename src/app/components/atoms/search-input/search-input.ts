import { Component, input, output, model} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-input',
  imports: [FormsModule],
  templateUrl: './search-input.html',
  styleUrl: './search-input.css',
  standalone: true,
})
export class SearchInput {
  placeholder = input<string>('');
  ariaLabel = input<string>('');
  value = model<string>('')

  searched = output<string>();

  protected query = '';
  onSearch(): void {
    this.searched.emit(this.value());
  }

}
