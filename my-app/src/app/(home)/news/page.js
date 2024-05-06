'use client'

import { NewsCard, NewsCardHero } from "@/components/newsCard";
import { news } from "@/database/news";
import slugify from 'slugify';

export default function NewsPage() {
  const firstNews = news[0];
  const remainingNews = news.slice(1);
  return (
    <div>
      <div className="max-w-screen-xl mx-auto px-4">
        <h1 className="home-section-header">LATEST UPDATES</h1>
        <div className="mt-14 flex flex-col gap-8">
          <NewsCardHero
            className="mb-20"
            key={firstNews.id}
            category={firstNews.category}
            title={firstNews.title}
            description={firstNews.description}
            date={firstNews.date}
            image={firstNews.image}
            linkToNews={`/news/${slugify(firstNews.title, { remove: /[*+~.()'"!:@]/g }).toLowerCase()}`}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 rounded-2xl">
            {remainingNews.map((news) => (
              <NewsCard
                key={news.id}
                category={news.category}
                title={news.title}
                description={news.description}
                date={news.date}
                image={news.image}
                linkToNews={`/news/${slugify(news.title, { remove: /[*+~.()'"!:@]/g }).toLowerCase()}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}