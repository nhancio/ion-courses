import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  author: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ id, title, excerpt, coverImage, date, author }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <Link to={`/blogs/${id}`}>
        <img 
          src={coverImage} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <div className="text-sm text-gray-500 mb-2">
            {new Date(date).toLocaleDateString()} • {author}
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 line-clamp-3">{excerpt}</p>
          <div className="mt-4">
            <span className="text-blue-600 hover:text-blue-800 font-medium">
              Read more →
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default BlogCard;
