import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Navigation from "../components/Navigation";

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    // Load blog from localStorage
    const savedBlogs = localStorage.getItem("blogs");
    if (savedBlogs) {
      const blogs = JSON.parse(savedBlogs);
      const currentBlog = blogs.find(
        (b) => b.slug === slug && b.status === "published"
      );

      if (currentBlog) {
        setBlog(currentBlog);

        // Find related blogs (same tags)
        const related = blogs
          .filter(
            (b) =>
              b.id !== currentBlog.id &&
              b.status === "published" &&
              b.tags.some((tag) => currentBlog.tags.includes(tag))
          )
          .slice(0, 3);
        setRelatedBlogs(related);
      } else {
        navigate("/blog");
      }
    }
  }, [slug, navigate]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const calculateReadingTime = (content) => {
    const wordsPerMinute = 200;
    const words = content.replace(/<[^>]*>/g, "").split(" ").length;
    return Math.ceil(words / wordsPerMinute);
  };

  if (!blog) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Loading...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section with Gradient Background */}
      <div
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #111827 0%, #0f172a 50%, #000000 100%)",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-30"></div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full translate-x-48 translate-y-48"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-xs sm:text-sm mb-6 sm:mb-8 overflow-x-auto">
            <Link
              to="/"
              className="text-white/80 hover:text-white transition-colors whitespace-nowrap"
            >
              Home
            </Link>
            <span className="text-white/60">/</span>
            <Link
              to="/blog"
              className="text-white/80 hover:text-white transition-colors whitespace-nowrap"
            >
              Blog
            </Link>
            <span className="text-white/60">/</span>
            <span className="text-white font-medium truncate">
              {blog.title}
            </span>
          </nav>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
            {blog.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 sm:px-4 py-1 sm:py-2 bg-white/20 backdrop-blur-sm text-white text-xs sm:text-sm rounded-full border border-white/30 hover:bg-white/30 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-6 sm:mb-8 leading-tight drop-shadow-2xl">
            {blog.title}
          </h1>

          {/* Author Info with Avatar */}
          <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 text-white/90">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
                <span className="text-white font-bold text-base sm:text-lg">
                  {blog.author.charAt(0).toUpperCase()}
                </span>
              </div>
              <div>
                <p className="font-semibold text-white text-sm sm:text-base">
                  {blog.author}
                </p>
                <p className="text-white/70 text-xs sm:text-sm">Author</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 sm:space-x-4 text-white/80 text-xs sm:text-sm">
              <div className="flex items-center space-x-1 sm:space-x-2">
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{formatDate(blog.createdAt)}</span>
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2">
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{calculateReadingTime(blog.content)} min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <article className="relative -mt-8 sm:-mt-12 lg:-mt-16 z-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Cover Image */}
          {blog.coverPhoto && (
            <div className="mb-8 sm:mb-12 relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl sm:rounded-3xl"></div>
              <img
                src={blog.coverPhoto}
                alt={blog.title}
                className="w-full h-48 sm:h-64 md:h-80 lg:h-[400px] xl:h-[500px] object-cover rounded-2xl sm:rounded-3xl shadow-2xl"
              />
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 md:hidden">
                <div className="bg-black/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 text-white">
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span>{formatDate(blog.createdAt)}</span>
                    <span>{calculateReadingTime(blog.content)} min read</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Content Card */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl shadow-orange-500/10 border border-gray-100 overflow-hidden mb-12 sm:mb-16">
            <div className="p-6 sm:p-8 md:p-10 lg:p-12">
              {/* Content */}
              <div
                className="prose prose-lg max-w-none prose-headings:text-[#0743ba] prose-p:text-gray-700 prose-a:text-[#fa7414] prose-strong:text-[#0743ba] prose-blockquote:border-l-[#fa7414] prose-blockquote:bg-orange-50 prose-blockquote:rounded-r-lg"
                style={{
                  fontSize: "18px",
                  lineHeight: "1.8",
                }}
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />

              {/* Share Section */}
              <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
                  <span className="text-gray-600 font-medium text-sm sm:text-base">
                    Share this article:
                  </span>
                  <div className="flex space-x-3">
                    <button
                      onClick={() => {
                        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
                          blog.title
                        )}&url=${encodeURIComponent(window.location.href)}`;
                        window.open(
                          twitterUrl,
                          "_blank",
                          "width=600,height=400"
                        );
                      }}
                      className="w-10 h-10 bg-[#0743ba] text-white rounded-full flex items-center justify-center hover:bg-[#0856d6] transition-colors"
                      title="Share on Twitter"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </button>
                    <button
                      onClick={() => {
                        const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                          window.location.href
                        )}`;
                        window.open(
                          facebookUrl,
                          "_blank",
                          "width=600,height=400"
                        );
                      }}
                      className="w-10 h-10 bg-[#0856d6] text-white rounded-full flex items-center justify-center hover:bg-[#0743ba] transition-colors"
                      title="Share on Facebook"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </button>
                    <button
                      onClick={() => {
                        const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                          window.location.href
                        )}`;
                        window.open(
                          linkedinUrl,
                          "_blank",
                          "width=600,height=400"
                        );
                      }}
                      className="w-10 h-10 bg-[#0743ba] text-white rounded-full flex items-center justify-center hover:bg-[#0856d6] transition-colors"
                      title="Share on LinkedIn"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </button>
                    <button
                      onClick={() => {
                        navigator.clipboard
                          .writeText(window.location.href)
                          .then(() => {
                            setShowToast(true);
                            setTimeout(() => setShowToast(false), 3000);
                          });
                      }}
                      className="w-10 h-10 bg-gray-600 text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                      title="Copy Link"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SEO Keywords (hidden, for SEO purposes) */}
          <div className="hidden">
            <meta name="keywords" content={blog.seoKeywords} />
            <meta
              name="description"
              content={blog.content.replace(/<[^>]*>/g, "").substring(0, 160)}
            />
            <meta property="og:title" content={blog.title} />
            <meta
              property="og:description"
              content={blog.content.replace(/<[^>]*>/g, "").substring(0, 160)}
            />
            <meta property="og:image" content={blog.coverPhoto} />
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedBlogs.length > 0 && (
        <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-[#0f172a] mb-4">
                More <span className="text-blue-600">Amazing</span> Reads
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Discover more insights and stories that might interest you
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedBlogs.map((relatedBlog, index) => (
                <article
                  key={relatedBlog.id}
                  className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={relatedBlog.coverPhoto || "/image1.jpg"}
                      alt={relatedBlog.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-gray-800">
                        {calculateReadingTime(relatedBlog.content)} min
                      </div>
                    </div>
                  </div>

                  <div className="p-4 sm:p-6 lg:p-8">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                      {relatedBlog.tags.slice(0, 2).map((tag, tagIndex) => (
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
                        <span>{formatDate(relatedBlog.createdAt)}</span>
                        <span className="mx-2">•</span>
                        <span>By {relatedBlog.author}</span>
                      </div>
                    </div>

                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 line-clamp-2 group-hover:text-[#0f172a] transition-colors duration-300">
                      {relatedBlog.title}
                    </h3>

                    <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 line-clamp-3 leading-relaxed">
                      {relatedBlog.content
                        .replace(/<[^>]*>/g, "")
                        .substring(0, 120)}
                      ...
                    </p>

                    <Link
                      to={`/blog/${relatedBlog.slug}`}
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

            {/* Call to Action */}
            <div className="text-center mt-12 sm:mt-16">
              <Link
                to="/blog"
                className="inline-flex items-center space-x-2 sm:space-x-3 bg-[#0f172a] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg hover:shadow-2xl hover:shadow-[#0f172a]/25 transition-all duration-300 transform hover:-translate-y-1"
              >
                <span>Explore All Articles</span>
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
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-4 right-4 z-50 animate-fade-in">
          <div className="bg-[#0f172a] text-white px-6 py-3 rounded-lg shadow-2xl flex items-center space-x-3 transform transition-all duration-300 ease-in-out">
            <svg
              className="w-5 h-5 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="font-medium">Link copied to clipboard!</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPost;
