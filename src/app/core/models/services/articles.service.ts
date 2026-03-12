import { Injectable } from "@angular/core";


export interface Article {
    id: number;
    date: string;
    datetime: string;
    title: string;
    description: string;
    imageUrl: string;
    imageAlt: string;
}

@Injectable({
    providedIn: 'root',
})
export class ArticlesService {
    getArticles(): Article[] {
        return Array.from({ length: 6 }, (_, i) => ({
            id: i + 1,
            date: 'Lorem ipsum dolor sit amet.',
            datetime: '2025-03-01',
            title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.',
            imageUrl: '',
            imageAlt: `Image article ${i + 1}`,
        }));
    }
}