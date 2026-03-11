import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesGrid } from './articles-grid';

describe('ArticlesGrid', () => {
  let component: ArticlesGrid;
  let fixture: ComponentFixture<ArticlesGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticlesGrid],
    }).compileComponents();

    fixture = TestBed.createComponent(ArticlesGrid);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
