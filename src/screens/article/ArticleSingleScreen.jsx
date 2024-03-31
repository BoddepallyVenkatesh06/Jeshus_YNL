import { Link } from "react-router-dom";
import { useEffect } from "react";
import { scrollToTop } from "../../utils/scrollToTop";
import ArticleInfoGroup from "../../components/article/ArticleInfoGroup";
import AuthorCard from "../../components/article/AuthorCard";
import ArticleSingleMore from "../../components/article/ArticleSingleMore";
import ArticleContent from "../../components/article/ArticleContent";
import ArticleSingleTop from "../../components/article/ArticleSingleTop";

const ArticleSingleScreen = () => {
  useEffect(() => scrollToTop(), []);
  return (
    <main className="content-wrapper">
      <div className="pg-article py-8">
        <div className="container">
          <div className="px-4 pt-4 grid lg:grid-cols-[2fr_1fr] gap-12">
            <div className="max-w-4xl">
              <Link
                to="/"
                className="inline-flex items-center gap-x-1.5 text-base text text-dark decoration-2 font-semibold mb-6"
                href="#"
              >
                <svg
                  className="w-3 h-3"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                  />
                </svg>
                Back to Articles
              </Link>
              <ArticleSingleTop />
              <ArticleContent />
            </div>
            <ArticleSingleMore />
            <AuthorCard />
          </div>
          <ArticleInfoGroup />
        </div>
      </div>
    </main>
  );
};

export default ArticleSingleScreen;
