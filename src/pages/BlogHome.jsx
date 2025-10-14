import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { initializeSampleBlogs } from "../data/sampleBlogs";
import Navbar from "../components/Navbar";
import HeroSection from "../components/Headers";

const BlogHome = () => {
  const [blogs, setBlogs] = useState([]);
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [allBlogs, setAllBlogs] = useState([]);
  const [blogsToShow, setBlogsToShow] = useState(6);

  useEffect(() => {
    // Initialize sample blogs if none exist
    initializeSampleBlogs();

    // Load blogs from localStorage
    const savedBlogs = localStorage.getItem("blogs");
    if (savedBlogs) {
      const parsedBlogs = JSON.parse(savedBlogs);

      const publishedBlogs = parsedBlogs.filter(
        (blog) => blog.status === "published"
      );

      // Sort blogs by date (newest first)
      const sortedBlogs = publishedBlogs.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );

      setBlogs(sortedBlogs);
      setRecentBlogs(sortedBlogs.slice(0, 4)); // Top 4 recent blogs
      setAllBlogs(sortedBlogs.slice(0, blogsToShow)); // All blogs with pagination
    }
  }, [blogsToShow]);

  const loadMoreBlogs = () => {
    const newBlogsToShow = blogsToShow + 6;
    setBlogsToShow(newBlogsToShow);
    setAllBlogs(blogs.slice(0, newBlogsToShow));
  };

  const formatDate = (dateString) => {
    if (!dateString) return "Recent";

    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) {
        return "Recent";
      }

      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch (error) {
      console.log("Date parsing error:", error, "for date:", dateString);
      return "Recent";
    }
  };

  const calculateReadingTime = (content) => {
    if (!content || typeof content !== "string") return 1;

    const wordsPerMinute = 200;
    const cleanContent = content.replace(/<[^>]*>/g, "").trim();
    if (!cleanContent) return 1;

    const words = cleanContent
      .split(/\s+/)
      .filter((word) => word.length > 0).length;
    const readingTime = Math.ceil(words / wordsPerMinute);
    return readingTime > 0 ? readingTime : 1;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar isHomePage={true} />

      <HeroSection
        heading="Inside IndianGoods: Stories"
        subheading="Discover insights about Indian manufacturing, B2B trade
              strategies, export opportunities, and real success stories from
              exporters and global buyers."
      />
      {/* Hero Section
      <section
        className=" pt-32 pb-16 px-4 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #111827 0%, #0f172a 50%, #000000 100%)",
        }}
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItMnptMCAwdjJoLTJ2LTJoMnptMCAwdi0yaC0ydjJoMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Inside IndianGoods: Stories & Insights
            </h1>
            <p className="text-lg md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Discover insights about Indian manufacturing, B2B trade
              strategies, export opportunities, and real success stories from
              exporters and global buyers.
            </p>
          </div>
        </div>
      </section> */}

      {/* Recent Posts Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Recent Posts
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay updated with our latest insights and industry trends
            </p>
          </div>

          {recentBlogs.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {recentBlogs.map((blog, index) => (
                <article
                  key={blog.id}
                  className="group bg-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={blog.coverPhoto || "/image1.jpg"}
                      alt={blog.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3">
                      <div className="bg-[#0f172a] text-white rounded-full px-2 py-1 text-xs font-medium">
                        {calculateReadingTime(blog.content)} min
                      </div>
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="flex items-center text-xs text-gray-500 mb-2">
                      <span>{formatDate(blog.createdAt)}</span>
                      <span className="mx-1">•</span>
                      <span>By {blog.author}</span>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-[#0f172a] transition-colors">
                      {blog.title}
                    </h3>

                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                      {(blog.content || "")
                        .replace(/<[^>]*>/g, "")
                        .substring(0, 80)}
                      ...
                    </p>

                    <div className="flex flex-wrap gap-1 mb-3">
                      {(blog.tags || []).slice(0, 1).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-[#0f172a]/10 text-[#0f172a] text-xs rounded-full font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      to={`/blog/${blog.slug}`}
                      className="inline-flex items-center text-[#0f172a] hover:text-[#0f172a]/80 font-medium text-sm group-hover:translate-x-1 transition-all duration-300"
                    >
                      <span>Read more</span>
                      <svg
                        className="w-3 h-3 ml-1 transition-transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* All Posts Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              All Articles
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our complete collection of insights and expertise
            </p>
          </div>

          {allBlogs.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {allBlogs.map((blog, index) => (
                  <article
                    key={blog.id}
                    className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={blog.coverPhoto || "/image1.jpg"}
                        alt={blog.title}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-4 right-4">
                        <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-gray-800">
                          {calculateReadingTime(blog.content)} min
                        </div>
                      </div>
                    </div>
                    <div className="p-4 sm:p-6 lg:p-8">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                        {(blog.tags || []).slice(0, 2).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 sm:px-3 py-1 bg-[#0f172a]/10 text-[#0f172a] text-xs rounded-full font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="mb-3 sm:mb-4">
                        <div className="flex items-center text-xs sm:text-sm text-gray-500 mb-2">
                          <span>{formatDate(blog.createdAt)}</span>
                          <span className="mx-2">•</span>
                          <span>By {blog.author}</span>
                        </div>
                      </div>
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 line-clamp-2 group-hover:text-[#0f172a] transition-colors duration-300">
                        {blog.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 line-clamp-3 leading-relaxed">
                        {(blog.content || "")
                          .replace(/<[^>]*>/g, "")
                          .substring(0, 120)}
                        ...
                      </p>
                      <Link
                        to={`/blog/${blog.slug}`}
                        className="inline-flex items-center space-x-2 text-[#0f172a] hover:text-[#0f172a]/80 font-semibold text-xs sm:text-sm group-hover:translate-x-1 transition-all duration-300"
                      >
                        <span>Read full article</span>
                        <svg
                          className="w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>

              {/* Load More Button */}
              {allBlogs.length < blogs.length && (
                <div className="text-center">
                  <button
                    onClick={loadMoreBlogs}
                    className="inline-flex items-center space-x-2 sm:space-x-3 bg-[#0f172a] hover:bg-[#0f172a]/90 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg hover:shadow-2xl hover:shadow-[#0f172a]/25 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <span>Load more posts</span>
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                No blog posts yet
              </h3>
              <p className="text-gray-600">Check back soon for new content!</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogHome;
