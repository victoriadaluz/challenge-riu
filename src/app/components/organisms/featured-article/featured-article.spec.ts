import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedArticle } from './featured-article';

describe('FeaturedArticle', () => {
  let component: FeaturedArticle;
  let fixture: ComponentFixture<FeaturedArticle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedArticle],
    }).compileComponents();

    fixture = TestBed.createComponent(FeaturedArticle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
