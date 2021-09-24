import { ArticleSource } from "./article-source";

export interface ArticleContent {
    source?: ArticleSource;
    author: string | null;
    title: string | null;
    description: string | null;
    url: string | null;
    urlToImage: string | null;
    publishedAt: string | null;
    content: string | null;
}
