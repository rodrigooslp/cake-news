import { ThemeColor } from "theme";

export type ExampleNews = 'news-1' | 'news-2' | 'news-3';
export type NewsType = 'politics' | 'business' | 'tech' | 'science' | 'sports';

export class NewsCategory {
  public text: string;
  public slug: NewsType;
  public color: ThemeColor;

  constructor (text: NewsType, color: ThemeColor) {
    this.text = text.toUpperCase();
    this.slug = text;
    this.color = color;
  }

  public static getAllNewsColors (): ThemeColor[] {
    return this.getAllNewsCategories().map(({ color }) => color);
  }

  public static getAllNewsCategories (): NewsCategory[] {
    return [
      new NewsCategory('politics', 'red'),
      new NewsCategory('business', 'purple'),
      new NewsCategory('tech', 'blue'),
      new NewsCategory('science', 'green'),
      new NewsCategory('sports', 'yellow')
    ];
  }

  public static findCategory (slug: NewsType) : NewsCategory {
    const found = this.getAllNewsCategories().find(category => category.slug === slug);
    if (!found) throw new Error(`Invalid NewsType. Expected to receive a valid slug. Got ${slug} instead`);
    return found;
  }
}

export class News {
  public id!: number;
  public type!: NewsType;
  public image?: ExampleNews;
  public title!: string;
  public avatar!: string;
  public author!: string;
  public content!: string;
}
