import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import blogData from '@/data/blog-posts.json';
import citiesData from '@/data/cities.json';
import thingsToDoData from '@/data/things-to-do.json';
import servicesData from '@/data/services.json';
import { generateDynamicMetadata, generateDynamicStructuredData } from '@/lib/seo-metadata';
import { siteConfig } from '@/lib/seo-config';

interface DynamicPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Helper function for parsing things-to-do routes
const parseThingsToDoSlug = (slug: string): { city: string } | null => {
  const match = slug.match(/^things-to-do-in-(.+)$/);
  if (!match) return null;
  const [, cityStatePart] = match;
  return { city: cityStatePart };
};

export async function generateStaticParams() {
    // Add blog category routes
    const blogCategoryParams = blogData.categories.map((category) => ({
        slug: category.slug,
    }));

    // Blog post routes are now handled by [slug]/[blog-slug] nested route

    // Add old blog post routes for redirects
    const oldBlogParams = blogData.blogPosts.map((post) => ({
        slug: post.slug,
    }));

    const cityParams = citiesData.cities.map((city) => ({
        slug: city.slug,
    }));


    // Add service routes (all services: core + subservices)
    const serviceParams = servicesData.services.map((service) => ({
        slug: service.slug,
    }));

    return [...blogCategoryParams.filter((p) => { const s = Array.isArray(p.slug) ? p.slug[0] : p.slug; return s !== 'blog' && s !== 'our-blog'; }), ...oldBlogParams, ...cityParams, ...serviceParams];
}

export async function generateMetadata({ params }: DynamicPageProps): Promise<Metadata> {
    const { slug } = await params;

    // Check for service routes first
    const service = servicesData.services.find((s) => s.slug === slug);
    if (service) {
        const keywords = service.seo.keywords?.split(',').map(k => k.trim()) || service.features;
        return generateDynamicMetadata(`/${slug}/`, {
            title: service.seo.metaTitle,
            description: service.seo.metaDescription,
            content: service.description,
            keywords: keywords,
        });
    }


    // Check for blog category routes
    const blogCategory = blogData.categories.find((category) => category.slug === slug);
    if (blogCategory) {
        const keywords = ['blog', 'articles', blogCategory.name.toLowerCase(), 'garage door tips', 'garage door maintenance', 'garage door repair'];
        return generateDynamicMetadata(`/${slug}/`, {
            title: `${blogCategory.name} Articles | Example Company`,
            description: `Expert ${blogCategory.name.toLowerCase()} tips, guides, and insights for maintaining beautiful garage doors and garage door systems in Example City, North Town, South Town, and East Village.`,
            content: blogCategory.description,
            keywords: keywords,
        });
    }

    // Blog post routes are now handled by [slug]/[blog-slug] nested route

    // Check for old blog post URLs and redirect to new structure
    const oldBlogPost = blogData.blogPosts.find((post) => post.slug === slug);
    if (oldBlogPost) {
        // For old blog post URLs, we'll handle the redirect in the component
        return {
            title: oldBlogPost.seo.metaTitle,
            description: oldBlogPost.seo.metaDescription,
        };
    }

    const city = citiesData.cities.find((c) => c.slug === slug);
    if (city) {
        const keywords = city.seo.keywords?.split(',').map(k => k.trim()) || [city.name, 'garage doors', 'garage door services', 'garage door repair'];
        return generateDynamicMetadata(`/${slug}/`, {
            title: city.seo.metaTitle,
            description: city.seo.metaDescription,
            content: city.description,
            keywords: keywords,
        });
    }

    return {
        title: 'Page Not Found',
        description: 'The page you are looking for does not exist.',
    };
}

const BlogCategoryIndex = React.lazy(() => import('../../components/blog/BlogCategoryIndex'));
const CityPage = React.lazy(() => import('../../templates/cities/city-page'));
const ServicePage = React.lazy(() => import('../../templates/services/service-page'));

const DynamicPage = async ({ params }: DynamicPageProps) => {
  const { slug } = await params;

  // Check for service routes first
  const service = servicesData.services.find((s) => s.slug === slug);
  if (service) {
    // Generate FAQs for schema
    const faqs = [
      {
        question: `How long does ${service.name.toLowerCase()} take?`,
        answer: `Typically, our ${service.name.toLowerCase()} service takes ${service.duration}. However, the exact timeline depends on the specific requirements and complexity of your project.`
      },
      {
        question: "What is included in the service?",
        answer: `Our ${service.name.toLowerCase()} includes: comprehensive service, and more. We provide comprehensive solutions tailored to your needs.`
      },
      {
        question: "Do you offer warranties?",
        answer: "Yes, we stand behind our work with comprehensive warranties. All our services come with a satisfaction guarantee and quality workmanship warranty."
      },
      {
        question: "How do I get started?",
        answer: "Getting started is easy! Simply contact us for a free consultation. We'll discuss your needs, provide a detailed quote, and schedule your service at your convenience."
      }
    ];

    // Generate structured data for service page
    const structuredData = generateDynamicStructuredData(`/${slug}/`, {
      serviceData: {
        name: service.name,
        description: service.description,
        url: `${siteConfig.url}/${slug}/`,
        category: service.category,
        price: service.priceRange,
        serviceType: service.category,
        areaServed: ['Example City', 'North Town', 'South Town', 'East Village'],
      },
      faqData: {
        questions: faqs
      },
      breadcrumbs: [
        { name: 'Home', url: siteConfig.url },
        { name: 'Services', url: `${siteConfig.url}/services/` },
        { name: service.name, url: `${siteConfig.url}/${slug}/` },
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
        
        <React.Suspense fallback={<div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-800 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading service...</p>
          </div>
        </div>}>
          <ServicePage params={{ slug }} />
        </React.Suspense>
      </>
    );
  }

  // Check for blog category routes
  const blogCategory = blogData.categories.find((category) => category.slug === slug);
  if (blogCategory) {
    const postsInCategory = blogData.blogPosts
      .filter(post => post.category.slug === slug)
      .map(post => ({
        ...post,
        category: blogCategory // Use the full category object
      }));
    const featuredPosts = postsInCategory.filter(post => post.featured);
    const regularPosts = postsInCategory.filter(post => !post.featured);
    
    // Generate structured data for blog category page
    const structuredData = generateDynamicStructuredData(`/${slug}/`, {
      breadcrumbs: [
        { name: 'Home', url: siteConfig.url },
        { name: 'Blog', url: `${siteConfig.url}/blog/` },
        { name: blogCategory.name, url: `${siteConfig.url}/${slug}/` },
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
        
        <React.Suspense fallback={<div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading category...</p>
          </div>
        </div>}>
          <BlogCategoryIndex 
            category={blogCategory}
            posts={postsInCategory}
            featuredPosts={featuredPosts}
            regularPosts={regularPosts}
            allCategories={blogData.categories}
            allTags={blogData.tags}
          />
        </React.Suspense>
      </>
    );
  }

  // Blog post routes are now handled by [slug]/[blog-slug] nested route

  // Check for old blog post URLs and redirect to new structure
  const oldBlogPost = blogData.blogPosts.find((post) => post.slug === slug);
  if (oldBlogPost) {
    // Redirect to new category-based URL structure
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Redirecting to new URL...</p>
          <script
            dangerouslySetInnerHTML={{
              __html: `window.location.replace('/${oldBlogPost.category.slug}/${oldBlogPost.slug}');`,
            }}
          />
        </div>
      </div>
    );
  }

  const city = citiesData.cities.find((c) => c.slug === slug);
  if (city) {
    // Generate structured data for city page with city-specific LocalBusiness schema
    const structuredData = generateDynamicStructuredData(`/${slug}/`, {
      cityData: {
        name: city.name,
        state: city.state,
        description: city.description,
        latitude: city.coordinates?.latitude?.toString() ?? "",
        longitude: city.coordinates?.longitude?.toString() ?? "",
        servicesOffered: city.services,
      },
      breadcrumbs: [
        { name: 'Home', url: siteConfig.url },
        { name: 'Service Areas', url: `${siteConfig.url}/service-areas/` },
        { name: `${city.name}, ${city.state}`, url: `${siteConfig.url}/${slug}/` },
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
        
        <React.Suspense fallback={<div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 primary mx-auto mb-4"></div>
            <p className="text-gray-600">Loading city page...</p>
          </div>
        </div>}>
          <CityPage params={{ slug }} />
        </React.Suspense>
      </>
    );
  }

  notFound();
};

export default DynamicPage;
