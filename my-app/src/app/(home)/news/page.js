import NewsCard from "@/components/newsCard";
import { news } from "@/database/news";

export default function NewsPage() {
  const firstNews = news.shift();
  return (
    <div>
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-5xl text-center font-bold">LATEST UPDATES</h1>
        <div className="mt-14 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 rounded-2xl">
          {news.map((news) => (
            <NewsCard
              key={news.id}
              category={news.category}
              title={news.title}
              description={news.description}
              date={news.date}
              image={news.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}