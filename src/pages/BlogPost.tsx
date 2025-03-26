import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getBlogPost } from '../services/contentful';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (id) {
        const fetchedPost = await getBlogPost(id);
        console.log('Blog post:', fetchedPost); // Log the fetched data
        setPost(fetchedPost);
        setLoading(false);
      }
    };
    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!post || !post.fields || !post.fields.coverImage || !post.fields.coverImage.fields || !post.fields.coverImage.fields.file) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <h1 className="text-2xl font-bold text-gray-900">Post not found</h1>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-50 pt-20">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <img
              src={post.fields.coverImage.fields.file.url}
              alt={post.fields.title}
              className="w-full h-[400px] object-cover rounded-lg mb-8"
            />
            <div className="text-sm text-gray-500 mb-4">
              {new Date(post.sys.createdAt).toLocaleDateString()} • {post.fields.author}
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">{post.fields.title}</h1>
            <div className="prose prose-lg max-w-none">
              {documentToReactComponents(post.fields.content)}
            </div>
          </motion.div>
        </article>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPost;
