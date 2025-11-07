import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import blogData from '@/data/blog-posts.json';
import { generateDynamicMetadata, generateDynamicStructuredData } from '@/lib/seo-metadata';
import { siteConfig } from '@/lib/seo-config';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
    'blog-slug': string;
  }>;
}

export async function generateStaticParams() {
  const params: Array<{ slug: string; 'blog-slug': string }> = [];
  
  // Generate category-based blog post routes
  blogData.blogPosts.forEach((post) => {
    params.push({
      slug: post.category.slug,
      'blog-slug': post.slug,
    });
  });
  
  return params;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug: categorySlug, 'blog-slug': blogSlug } = await params;
  
  const blogPost = blogData.blogPosts.find((post) => 
    post.slug === blogSlug && post.category.slug === categorySlug
  );
  
  if (!blogPost) {
    return {
      title: 'Blog Post Not Found',
      description: 'The blog post you are looking for does not exist.',
    };
  }
  
  // Extract keywords from SEO keywords string
  const keywords = blogPost.seo.keywords.split(',').map(k => k.trim());
  
  return generateDynamicMetadata(`/${categorySlug}/${blogSlug}/`, {
    title: blogPost.seo.metaTitle,
    description: blogPost.seo.metaDescription,
    content: blogPost.content,
    publishedTime: blogPost.publishedAt,
    modifiedTime: blogPost.updatedAt,
    author: blogPost.author.name,
    tags: blogPost.tags,
    keywords: keywords,
    image: blogPost.image?.url,
  });
}

const BlogPost = React.lazy(() => import('@/components/blog/BlogPost'));

const BlogPostPage = async ({ params }: BlogPostPageProps) => {
  const { slug: categorySlug, 'blog-slug': blogSlug } = await params;
  
  const blogPost = blogData.blogPosts.find((post) => 
    post.slug === blogSlug && post.category.slug === categorySlug
  );
  
  if (!blogPost) {
    notFound();
  }

  // Find related posts based on interlinking
  const relatedPosts = blogPost.relatedPosts
    .map(relatedSlug => blogData.blogPosts.find(post => post.slug === relatedSlug))
    .filter((post): post is NonNullable<typeof post> => post !== undefined);
  
  // Generate structured data with blog post schema
  const structuredData = generateDynamicStructuredData(`/${categorySlug}/${blogSlug}/`, {
    blogPostData: {
      title: blogPost.title,
      slug: blogPost.slug,
      excerpt: blogPost.excerpt,
      content: blogPost.content,
      author: {
        name: blogPost.author.name,
        title: blogPost.author.bio || 'Content Writer',
        avatar: blogPost.author.avatar,
      },
      publishedAt: blogPost.publishedAt,
      updatedAt: blogPost.updatedAt,
      featuredImage: blogPost.image?.url || '/assets/images/Mike_s Garage Door Repair Center 21.webp',
      category: blogPost.category.name,
      tags: blogPost.tags,
      readTime: blogPost.readTime,
      seo: blogPost.seo,
    },
    breadcrumbs: [
      { name: 'Home', url: siteConfig.url },
      { name: blogPost.category.name, url: `${siteConfig.url}/${categorySlug}/` },
      { name: blogPost.title, url: `${siteConfig.url}/${categorySlug}/${blogSlug}/` },
    ],
  });
  
  return (
    <>
      {/* Add structured data scripts */}
      {structuredData.map((script) => (
        <script
          key={script.id}
          type={script.type}
          dangerouslySetInnerHTML={{ __html: script.children }}
        />
      ))}
      
      <React.Suspense fallback={
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading article...</p>
          </div>
        </div>
      }>
        <BlogPost post={blogPost} relatedPosts={relatedPosts} />
      </React.Suspense>
    </>
  );
};

export default BlogPostPage;