"use client";
import React, { useState } from 'react';
import Image from '@/components/ui/image';
import Link from 'next/link';
import { ArrowLeft, Facebook, Twitter, Linkedin, Copy, Check } from 'lucide-react';


interface Author {
  name: string;
  bio: string;
  avatar: string;
}

interface Category {
  slug: string;
  name: string;
  description: string;
}

interface ImageData {
  url: string;
  alt: string;
  width: number;
  height: number;
}

interface Keyword {
  text: string;
  url: string;
}

interface SEO {
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  canonical: string;
}

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  publishedAt: string;
  updatedAt: string;
  author: Author;
  category: Category;
  tags: string[];
  image: ImageData;
  readTime: string;
  featured: boolean;
  status: string;
  seo: SEO;
  highlights: string[];
  keywords: Keyword[];
  interlinking: string[];
  relatedPosts: string[];
}

interface BlogPostProps {
  post: BlogPost;
  relatedPosts?: BlogPost[];
}

const BlogPost: React.FC<BlogPostProps> = ({ post, relatedPosts = [] }) => {
  const [copied, setCopied] = useState(false);

  // Format date
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Share functions
  const shareToFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(`Check out this article: ${post.title}`)}`;
    window.open(url, '_blank');
  };

  const shareToTwitter = () => {
    const url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(`Check out this article: ${post.title}`)}`;
    window.open(url, '_blank');
  };

  const shareToLinkedIn = () => {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(post.title)}&summary=${encodeURIComponent(post.excerpt)}`;
    window.open(url, '_blank');
  };

  const copyUrl = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy URL:', err);
    }
  };

  // Convert markdown-style content to JSX (basic conversion)
  const formatContent = (content: string) => {
    return content
      .split('\n')
      .map((line, index) => {
        if (line.startsWith('## ')) {
          return <h2 key={index} className="text-2xl md:text-3xl font-bold text-foreground mb-6 mt-8 first:mt-0">{line.substring(3)}</h2>;
        }
        if (line.startsWith('### ')) {
          return <h3 key={index} className="text-xl md:text-2xl font-semibold text-foreground mb-4 mt-6">{line.substring(4)}</h3>;
        }
        if (line.startsWith('* ') && !line.startsWith('* *')) {
          return <li key={index} className="text-muted-foreground mb-2 ml-4">{line.substring(2)}</li>;
        }
        if (line.trim() === '') {
          return <br key={index} />;
        }
        if (line.trim() !== '') {
          return <p key={index} className="text-muted-foreground leading-relaxed mb-4">{line}</p>;
        }
        return null;
      })
      .filter(Boolean);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header with Background Image and Category */}
      <header className="relative h-96 md:h-[500px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={post.image.url}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 h-full flex flex-col justify-center">
          <div className="max-w-4xl mx-auto px-4 text-center">
            {/* Category */}
            <div className="mb-6">
              <Link 
                href={`/${post.category.slug}`}
                className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium hover:bg-primary-hover transition-colors"
              >
                {post.category.name}
              </Link>
            </div>
            
            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>
          </div>
        </div>
      </header>

      {/* Breadcrumb Navigation */}
      <div className="bg-card border-b border-border">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link href="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </div>

      {/* Article Content */}
      <article className="bg-background">
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Author, Date, and Share Buttons */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-8 pb-8 border-b border-border">
            {/* Author and Date */}
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-semibold text-foreground">{post.author.name}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>{formatDate(post.publishedAt)}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>

            {/* Share Buttons */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground mr-2">Share:</span>
              <button
                onClick={shareToFacebook}
                className="p-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                aria-label="Share on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </button>
              <button
                onClick={shareToTwitter}
                className="p-2 rounded-lg bg-black text-white hover:bg-gray-800 transition-colors"
                aria-label="Share on Twitter"
              >
                <Twitter className="w-4 h-4" />
              </button>
              <button
                onClick={shareToLinkedIn}
                className="p-2 rounded-lg bg-blue-700 text-white hover:bg-blue-800 transition-colors"
                aria-label="Share on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </button>
              <button
                onClick={copyUrl}
                className={`p-2 rounded-lg transition-colors ${
                  copied 
                    ? 'bg-green-600 text-white' 
                    : 'bg-muted text-muted-foreground hover:bg-muted-hover'
                }`}
                aria-label="Copy URL"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {formatContent(post.content)}
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      {/* More Articles Section */}
      {relatedPosts.length > 0 && (
        <section className="bg-bg-secondary py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">More Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/${relatedPost.category.slug}/${relatedPost.slug}`}
                  className="group block"
                >
                  <article className="bg-card rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={relatedPost.image.url}
                        alt={relatedPost.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                          {relatedPost.category.name}
                        </span>
                        <span className="text-muted-foreground text-sm">{relatedPost.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-muted-foreground line-clamp-3">
                        {relatedPost.excerpt}
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogPost;