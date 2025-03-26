import { createClient } from 'contentful';

const space = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
const accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;

console.log('Contentful Space ID:', space);
console.log('Contentful Access Token:', accessToken);

const client = createClient({
    space,
    accessToken,
});

export const getBlogPosts = async () => {
  try {
    const response = await client.getEntries({
      content_type: 'blogPost',
      order: '-sys.createdAt',
    });
    console.log('Fetched blog posts:', response.items); // Log the fetched data
    return response.items;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
};

export const getBlogPost = async (id: string) => {
  try {
    const response = await client.getEntry(id);
    console.log('Fetched blog post:', response); // Log the fetched data
    return response;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
};
