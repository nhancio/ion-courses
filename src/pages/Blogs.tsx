import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import BlogCard from '../components/BlogCard';
import { getBlogPosts } from '../services/contentful';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Blogs: React.FC = () => {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      const posts = await getBlogPosts();
      console.log('Blogs:', posts); // Log the fetched data
      setBlogs(posts);
      setLoading(false);
    };
    fetchBlogs();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Blog</h1>
            <p className="text-lg text-gray-600">
              Latest insights and updates from the VLSI industry
            </p>
          </motion.div>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog: any) => (
                blog.fields && blog.fields.coverImage && blog.fields.coverImage.fields && blog.fields.coverImage.fields.file && (
                  <BlogCard
                    key={blog.sys.id}
                    id={blog.sys.id}
                    title={blog.fields.title}
                    excerpt={blog.fields.excerpt}
                    coverImage={blog.fields.coverImage.fields.file.url}
                    date={blog.sys.createdAt}
                    author={blog.fields.author}
                  />
                )
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;
