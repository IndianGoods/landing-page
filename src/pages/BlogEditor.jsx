import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Editor } from "@tinymce/tinymce-react";

const BlogEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = Boolean(id);

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    coverPhoto: "",
    seoKeywords: [],
    tags: [],
    content: "",
    author: "",
    status: "draft",
    scheduledDate: "",
    scheduledTime: "",
    isFeatured: false,
  });

  const [tagInput, setTagInput] = useState("");
  const [seoKeywordInput, setSeoKeywordInput] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Check if admin is logged in
    const isLoggedIn = localStorage.getItem("isAdminLoggedIn");
    if (!isLoggedIn) {
      navigate("/admin/login");
      return;
    }

    // If editing, load the blog data
    if (isEditing) {
      const savedBlogs = localStorage.getItem("blogs");
      if (savedBlogs) {
        const blogs = JSON.parse(savedBlogs);
        const blog = blogs.find((b) => b.id === parseInt(id));
        if (blog) {
          setFormData({
            title: blog.title || "",
            slug: blog.slug || "",
            coverPhoto: blog.coverPhoto || "",
            seoKeywords: Array.isArray(blog.seoKeywords)
              ? blog.seoKeywords
              : [],
            tags: Array.isArray(blog.tags) ? blog.tags : [],
            content: blog.content || "",
            author: blog.author || "",
            status: blog.status || "draft",
            scheduledDate: blog.scheduledDate || "",
            scheduledTime: blog.scheduledTime || "",
            isFeatured: blog.isFeatured || false,
          });
        } else {
          navigate("/admin");
        }
      }
    }
  }, [id, isEditing, navigate]);

  // Generate slug from title
  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim("-");
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;
    setFormData((prev) => ({
      ...prev,
      [name]: inputValue,
      ...(name === "title" && { slug: generateSlug(value) }),
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleContentChange = (content) => {
    setFormData((prev) => ({ ...prev, content }));
    if (errors.content) {
      setErrors((prev) => ({ ...prev, content: "" }));
    }
  };

  const handleAddTag = (e) => {
    e.preventDefault();
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
      setFormData((prev) => ({
        ...prev,
        tags: [...prev.tags, tagInput.trim()],
      }));
      setTagInput("");
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFormData((prev) => ({
          ...prev,
          coverPhoto: e.target.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleTagKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddTag(e);
    }
  };

  const handleAddSeoKeyword = (e) => {
    e.preventDefault();
    if (
      seoKeywordInput.trim() &&
      !formData.seoKeywords.includes(seoKeywordInput.trim())
    ) {
      setFormData((prev) => ({
        ...prev,
        seoKeywords: [...prev.seoKeywords, seoKeywordInput.trim()],
      }));
      setSeoKeywordInput("");
    }
  };

  const handleRemoveSeoKeyword = (keywordToRemove) => {
    setFormData((prev) => ({
      ...prev,
      seoKeywords: prev.seoKeywords.filter(
        (keyword) => keyword !== keywordToRemove
      ),
    }));
  };

  const handleSeoKeywordKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddSeoKeyword(e);
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) newErrors.title = "Title is required";
    if (!formData.author.trim()) newErrors.author = "Author is required";
    if (!formData.content.trim() || formData.content === "<p><br></p>") {
      newErrors.content = "Content is required";
    }
    if (formData.status === "scheduled") {
      if (!formData.scheduledDate)
        newErrors.scheduledDate = "Scheduled date is required";
      if (!formData.scheduledTime)
        newErrors.scheduledTime = "Scheduled time is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const savedBlogs = localStorage.getItem("blogs");
    let blogs = savedBlogs ? JSON.parse(savedBlogs) : [];

    const blogData = {
      ...formData,
      id: isEditing ? parseInt(id) : Date.now(),
      createdAt: isEditing
        ? formData.createdAt || new Date().toISOString()
        : new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      // Ensure all arrays are properly defined
      seoKeywords: Array.isArray(formData.seoKeywords)
        ? formData.seoKeywords
        : [],
      tags: Array.isArray(formData.tags) ? formData.tags : [],
    };

    // If this blog is being marked as featured, unmark all other featured blogs
    if (blogData.isFeatured) {
      blogs = blogs.map((blog) => ({ ...blog, isFeatured: false }));
    }

    if (isEditing) {
      blogs = blogs.map((blog) => (blog.id === parseInt(id) ? blogData : blog));
    } else {
      blogs.push(blogData);
    }

    localStorage.setItem("blogs", JSON.stringify(blogs));
    navigate("/admin");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">
              {isEditing ? "Edit Blog" : "Create New Blog"}
            </h1>
            <button
              onClick={() => navigate("/admin")}
              className="text-gray-600 hover:text-gray-800 font-medium"
            >
              Back to Dashboard
            </button>
          </div>
        </div>
      </header>

      {/* Form */}
      <main className="max-w-4xl mx-auto py-8 px-4">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Basic Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Title */}
              <div className="md:col-span-2">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Title *
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                    errors.title ? "border-red-300" : "border-gray-300"
                  }`}
                  placeholder="Enter blog title"
                />
                {errors.title && (
                  <p className="mt-1 text-sm text-red-600">{errors.title}</p>
                )}
              </div>

              {/* Slug */}
              <div className="md:col-span-2">
                <label
                  htmlFor="slug"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Slug (Auto-generated)
                </label>
                <input
                  type="text"
                  id="slug"
                  name="slug"
                  value={formData.slug}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-50"
                  placeholder="auto-generated-slug"
                />
                <p className="mt-1 text-sm text-gray-500">
                  URL: /blog/{formData.slug}
                </p>
              </div>

              {/* Author */}
              <div>
                <label
                  htmlFor="author"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Author *
                </label>
                <input
                  type="text"
                  id="author"
                  name="author"
                  value={formData.author}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                    errors.author ? "border-red-300" : "border-gray-300"
                  }`}
                  placeholder="Author name"
                />
                {errors.author && (
                  <p className="mt-1 text-sm text-red-600">{errors.author}</p>
                )}
              </div>

              {/* Status */}
              <div>
                <label
                  htmlFor="status"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Status
                </label>
                <select
                  id="status"
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                  <option value="scheduled">Scheduled</option>
                </select>
              </div>

              {/* Featured Blog Toggle */}
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="isFeatured"
                  name="isFeatured"
                  checked={formData.isFeatured}
                  onChange={handleInputChange}
                  className="w-5 h-5 text-orange-600 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 focus:ring-2"
                />
                <label
                  htmlFor="isFeatured"
                  className="text-sm font-medium text-gray-700"
                >
                  Featured Blog
                </label>
                <span className="text-xs text-gray-500">
                  (Display this blog in the featured section on homepage)
                </span>
              </div>

              {/* Scheduled Date and Time */}
              {formData.status === "scheduled" && (
                <>
                  <div>
                    <label
                      htmlFor="scheduledDate"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Scheduled Date *
                    </label>
                    <input
                      type="date"
                      id="scheduledDate"
                      name="scheduledDate"
                      value={formData.scheduledDate}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                        errors.scheduledDate
                          ? "border-red-300"
                          : "border-gray-300"
                      }`}
                    />
                    {errors.scheduledDate && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.scheduledDate}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="scheduledTime"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Scheduled Time *
                    </label>
                    <input
                      type="time"
                      id="scheduledTime"
                      name="scheduledTime"
                      value={formData.scheduledTime}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                        errors.scheduledTime
                          ? "border-red-300"
                          : "border-gray-300"
                      }`}
                    />
                    {errors.scheduledTime && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.scheduledTime}
                      </p>
                    )}
                  </div>
                </>
              )}

              {/* Cover Photo */}
              <div className="md:col-span-2">
                <label
                  htmlFor="coverPhoto"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Cover Photo
                </label>
                <input
                  type="file"
                  id="coverPhoto"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                {formData.coverPhoto && (
                  <div className="mt-2">
                    <img
                      src={formData.coverPhoto}
                      alt="Cover preview"
                      className="w-32 h-20 object-cover rounded-lg"
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />
                  </div>
                )}
              </div>

              {/* SEO Keywords */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  SEO Keywords
                </label>

                <div className="flex flex-wrap gap-2 mb-4">
                  {formData.seoKeywords.map((keyword, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
                    >
                      {keyword}
                      <button
                        type="button"
                        onClick={() => handleRemoveSeoKeyword(keyword)}
                        className="ml-2 text-blue-500 hover:text-blue-700"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <input
                    type="text"
                    value={seoKeywordInput}
                    onChange={(e) => setSeoKeywordInput(e.target.value)}
                    onKeyPress={handleSeoKeywordKeyPress}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Add SEO keyword and press Enter"
                  />
                  <button
                    type="button"
                    onClick={handleAddSeoKeyword}
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Tags</h2>

            <div className="flex flex-wrap gap-2 mb-4">
              {formData.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full"
                >
                  {tag}
                  <button
                    type="button"
                    onClick={() => handleRemoveTag(tag)}
                    className="ml-2 text-orange-500 hover:text-orange-700"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyPress={handleTagKeyPress}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Add a tag and press Enter"
              />
              <button
                type="button"
                onClick={handleAddTag}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Add
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Content *
            </h2>

            <div
              className={`border rounded-md ${
                errors.content ? "border-red-300" : "border-gray-300"
              }`}
            >
              <Editor
                apiKey="s2f2aryitf8tpig5ryge80mzprikz03t4qs8zhx9cqdrvx4t"
                value={formData.content}
                onEditorChange={handleContentChange}
                init={{
                  height: 400,
                  menubar: false,
                  plugins: [
                    "advlist",
                    "autolink",
                    "lists",
                    "link",
                    "image",
                    "charmap",
                    "preview",
                    "anchor",
                    "searchreplace",
                    "visualblocks",
                    "code",
                    "fullscreen",
                    "insertdatetime",
                    "media",
                    "table",
                    "help",
                    "wordcount",
                  ],
                  toolbar:
                    "undo redo | blocks | " +
                    "bold italic underline forecolor backcolor | alignleft aligncenter " +
                    "alignright alignjustify | bullist numlist outdent indent | " +
                    "link image | removeformat | code help",
                  content_style:
                    "body { font-family:Helvetica,Arial,sans-serif; font-size:14px; line-height: 1.6; } ul { list-style-type: disc !important; margin: 1em 0; padding-left: 40px; } ol { list-style-type: decimal !important; margin: 1em 0; padding-left: 40px; } li { display: list-item !important; margin-bottom: 5px; }",
                  branding: false,
                  valid_elements: "*[*]",
                  extended_valid_elements: "*[*]",
                  forced_root_block: "p",
                  force_p_newlines: true,
                  convert_newlines_to_brs: false,
                  remove_linebreaks: false,
                  keep_styles: false,
                  verify_html: false,
                }}
              />
            </div>
            {errors.content && (
              <p className="mt-2 text-sm text-red-600">{errors.content}</p>
            )}
          </div>

          {/* Submit Buttons */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex gap-4 justify-end">
              <button
                type="button"
                onClick={() => navigate("/admin")}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-medium"
              >
                {isEditing ? "Update Blog" : "Create Blog"}
              </button>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
};

export default BlogEditor;
